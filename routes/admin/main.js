const router = require("express").Router();
const MainController = require("../../controllers/admin/mainController");

router.get("/", MainController.main);

module.exports = router;
