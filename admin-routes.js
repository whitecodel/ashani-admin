const main = require('./routes/admin-routes/main');
const auth = require('./routes/admin-routes/auth');
const dashboard = require('./routes/admin-routes/dashboard');
const systeminfo = require('./routes/admin-routes/systeminfo');

const AppRoutes = app => {
    app.use('/', main);
    app.use('/admin', auth);
    app.use('/admin', dashboard);
    app.use('/admin', systeminfo);
};

module.exports = AppRoutes;