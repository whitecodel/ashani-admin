const router = require("express").Router();
const SliderController = require("../../controllers/admin/sliderController");

router.get("/movie/list", SliderController.movieSliderView);
router.get("/series/list", SliderController.seriesSliderView);

module.exports = router;
