const main = require("./routes/admin/main");
const auth = require("./routes/admin/auth");
const dashboard = require("./routes/admin/dashboard");
const slider = require("./routes/admin/slider");
const systeminfo = require("./routes/admin/systeminfo");
const { NotLoggedIn } = require("./middlewares/Adminauth");

const AppRoutes = (app) => {
    app.use("/", main);
    app.use("/admin", auth);
    app.use("/admin", NotLoggedIn, dashboard);
    app.use("/admin/slider", NotLoggedIn, slider);
    app.use("/admin", NotLoggedIn, systeminfo);
};

module.exports = AppRoutes;
