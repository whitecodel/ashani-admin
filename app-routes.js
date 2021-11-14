const home = require('./routes/app-routes/home');
const { NotLoggedIn } = require('./middlewares/Appauth');

const AppRoutes = app => {
    app.use('/app', NotLoggedIn, home);
};

module.exports = AppRoutes;