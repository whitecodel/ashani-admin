const router = require("express").Router();
const AuthController = require("../../controllers/admin/authController");

router.get("/login", AuthController.loginView);
router.post("/login", AuthController.login);
router.get("/changepassword");
router.post("/changepassword", AuthController.changePassword);
router.post("/logout", AuthController.logout);

module.exports = router;
