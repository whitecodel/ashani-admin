const router = require('express').Router();
const { NotLoggedIn } = require('../../middlewares/Appauth');

router.get('/home', NotLoggedIn, async (req, res) => {
    return res.send('Home routes working');
});

module.exports = router;