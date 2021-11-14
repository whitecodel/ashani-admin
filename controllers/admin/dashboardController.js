class DashboardController {
    static dashboard = async (req, res) => {
        return res.render("admin/dashboard");
    };
}

module.exports = DashboardController;
