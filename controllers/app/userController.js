const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController {
    static register = async (req, res) => {
        try {
            const { name, mobile_number, email, password, mpin } = req.body;
            // validate all fields
            if (!name || !mobile_number || !email || !password || !mpin) {
                return res.status(500).send("All fields are required");
            }
            // check if user already exists
            const exist = await User.findOne({ mobile_number });
            if (exist) {
                return res.status(500).send("User already exists");
            }
            // encrypt password
            const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
            const hashedPassword = await bcrypt.hash(password, salt);
            // create new user
            const user = await User.create({
                name,
                mobile_number,
                email,
                password: hashedPassword,
                mpin,
            });
            // create token
            const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
            return res.send(token);
        } catch (error) {
            console.log(error);
            res.status(500).send("Something went wrong");
        }
    };

    static login = async (req, res) => {
        try {
            const { mobile_number, password } = req.body;
            // validate mobile_number and password
            if (!mobile_number || !password) {
                return res
                    .status(500)
                    .send("Mobile number and password are required");
            }
            // check if user exists
            const user = await User.findOne({ mobile_number });
            if (!user) {
                return res.status(401).send("Invalid mobile number");
            }
            // compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send("Invalid password");
            }
            const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
            return res.send(token);
        } catch (error) {
            console.log(error);
            res.status(500).send("Something went wrong");
        }
    };
}

module.exports = UserController;
