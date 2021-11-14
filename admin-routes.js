const main = require("./routes/admin-routes/main");
const auth = require("./routes/admin-routes/auth");
const dashboard = require("./routes/admin-routes/dashboard");
const systeminfo = require("./routes/admin-routes/systeminfo");
const { NotLoggedIn } = require("./middlewares/Adminauth");

const AppRoutes = (app) => {
    app.use("/", NotLoggedIn, main);
    app.use("/admin", auth);
    app.use("/admin", NotLoggedIn, dashboard);
    app.use("/admin", NotLoggedIn, systeminfo);
};

module.exports = AppRoutes;
