const router = require('express').Router();
const { NotLoggedIn } = require('../../middlewares/Adminauth');

router.get('/', NotLoggedIn, async (req, res) => {
    return res.redirect('/admin/dashboard');
});

module.exports = router;