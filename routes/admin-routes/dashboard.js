const router = require('express').Router();
const { NotLoggedIn } = require('../../middlewares/Adminauth');

router.get('/dashboard', NotLoggedIn, async (req, res) => {
    return res.render('admin/dashboard');
});

module.exports = router;