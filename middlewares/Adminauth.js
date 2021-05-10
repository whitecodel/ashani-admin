const Adminauth = require('../models/Adminauth');

const LoggedIn = async (req, res, next) => {

}

const NotLoggedIn = async (req, res, next) => {
    req.session.path = req.originalUrl;
    const username = req.session.username;
    const password = req.session.password;
    if (!username || !password) return res.redirect('/admin/login');
    const user = await Adminauth.findOne({
        username: username
    });
    if (!user) return res.redirect('/admin/login');
    const validPassword = user.password == password ? true : false ;
    if (!validPassword) return res.redirect('/admin/login');
    next();
}

module.exports = {
    LoggedIn,
    NotLoggedIn
};