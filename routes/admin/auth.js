const router = require("express").Router();
const { NotLoggedIn } = require("../../middlewares/Adminauth");
const AuthController = require("../../controllers/admin/authController");

router.get("/login", AuthController.loginView);
router.post("/login", AuthController.login);
router.get("/changepassword", NotLoggedIn, AuthController.changePasswordView);
router.post("/changepassword", NotLoggedIn, AuthController.changePassword);
router.post("/logout", AuthController.logout);

module.exports = router;
