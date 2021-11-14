const router = require("express").Router();
const HomeController = require("../../controllers/app/homeController");

router.get("/home", HomeController.home);

module.exports = router;
