class MainController {
    static main = async (req, res) => {
        return res.redirect("/admin/dashboard");
    };
}

module.exports = MainController;
