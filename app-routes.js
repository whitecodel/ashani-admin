const home = require('./routes/app-routes/home');

const AppRoutes = app => {
    app.use('/app', home);
};

module.exports = AppRoutes;