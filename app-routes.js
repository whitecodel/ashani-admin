const home = require("./routes/app/home");
const { NotLoggedIn } = require("./middlewares/Appauth");
const user = require("./routes/app/user");

const AppRoutes = (app) => {
    // app.use("/api", NotLoggedIn, home);
    app.use("/api", user);
};

module.exports = AppRoutes;
