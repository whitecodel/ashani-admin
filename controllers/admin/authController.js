const bcrypt = require("bcrypt");
const Adminauth = require("../../models/Adminauth");

class AuthController {
    static loginView = async (req, res) => {
        return res.render("admin/login");
    };

    static login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (!username || !password)
            return res.send("Something went wrong please try again later");
        const user = await Adminauth.findOne({
            username: username,
        });
        if (!user) return res.status(401).send("Account not found");
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).send("Invalid Password");
        req.session.username = user.username;
        req.session.password = user.password;
        if (req.session.path) {
            return res.status(200).send(req.session.path);
        } else {
            return res.status(200).send("success");
        }
    };

    static changePasswordView = async (req, res) => {
        return res.render("admin/changepassword");
    };

    static changePassword = async (req, res) => {
        try {
            const newpassword = req.body.newpassword;
            if (newpassword.length < 6)
                return res.send("Password must be at least 6 charactors long");
            const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
            const hashedPassword = await bcrypt.hash(newpassword, salt);
            await Adminauth.updateOne({
                password: hashedPassword,
            });
            return res.send("success");
        } catch (error) {
            return res.send("Something went wrong please try again later");
        }
    };

    static logout = async (req, res) => {
        try {
            req.session.destroy();
            return res.send("success");
        } catch (error) {
            return res.send("Something went wrong please try again later");
        }
    };
}

module.exports = AuthController;
