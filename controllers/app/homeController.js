class HomeController {
    static home = async (req, res) => {
        return res.send('Home routes working');
    }
}

module.exports = HomeController;