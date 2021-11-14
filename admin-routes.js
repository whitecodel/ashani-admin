const main = require("./routes/admin/main");
const auth = require("./routes/admin/auth");
const dashboard = require("./routes/admin/dashboard");
const systeminfo = require("./routes/admin/systeminfo");
const { NotLoggedIn } = require("./middlewares/Adminauth");

const AppRoutes = (app) => {
    app.use("/", NotLoggedIn, main);
    app.use("/admin", auth);
    app.use("/admin", NotLoggedIn, dashboard);
    app.use("/admin", NotLoggedIn, systeminfo);
};

module.exports = AppRoutes;
