const router = require('express').Router();
const Adminauth = require('../../models/Adminauth');
const bcrypt = require('bcrypt');
const {
    NotLoggedIn
} = require('../../middlewares/Adminauth');

router.get('/login', async (req, res) => {
    return res.render('admin/login');
});

router.get('/changepassword', NotLoggedIn, async (req, res) => {
    return res.render('admin/changepassword');
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) return res.send('Something went wrong please try again later');
    const user = await Adminauth.findOne({
        username: username
    });
    if (!user) return res.status(401).send('Account not found');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send('Invalid Password');
    req.session.username = user.username;
    req.session.password = user.password;
    if (req.session.path) {
        return res.status(200).send(req.session.path);
    } else {
        return res.status(200).send('success');
    }
});

router.post('/changepassword', NotLoggedIn, async (req, res) => {
    try {
        const newpassword = req.body.newpassword;
        if (newpassword.length < 6) return res.send('Password must be at least 6 charactors long');
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const hashedPassword = await bcrypt.hash(newpassword, salt);
        await Adminauth.updateOne({
            password: hashedPassword
        });
        return res.send('success');
    } catch (error) {
        return res.send('Something went wrong please try again later');
    }
});

router.post('/logout', NotLoggedIn, async (req, res) => {
    try {
        req.session.destroy();
        return res.send('success');
    } catch (error) {
        return res.send('Something went wrong please try again later');
    }
});

module.exports = router;