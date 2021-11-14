const router = require("express").Router();

router.get("/home", NotLoggedIn);

module.exports = router;
