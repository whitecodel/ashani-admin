const router = require("express").Router();
const DashboardController = require("../../controllers/admin/dashboardController");

router.get("/dashboard", DashboardController.dashboard);

module.exports = router;
