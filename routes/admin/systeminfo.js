const router = require("express").Router();
const SystemInfoController = require("../../controllers/admin/systeminfoController");

router.get("/systeminfo", SystemInfoController.systemInfo);

module.exports = router;
