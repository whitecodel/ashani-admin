class SliderController {
    static movieSliderView = (req, res) => {
        return res.render("admin/movieSliderList");
    };

    static seriesSliderView = (req, res) => {
        return res.render("admin/seriesSliderList");
    };
}

module.exports = SliderController;
