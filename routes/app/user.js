const router = require("express").Router();
const UserController = require("../../controllers/app/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
