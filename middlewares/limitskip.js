const LimitSkipGet = async (req, res, next) => {
    req.limit = req.query.limit ? parseInt(req.query.limit) : 20;
    req.skip = req.query.skip ? parseInt(req.query.skip) : 0;
    next();
}

const LimitSkipPost = async (req, res, next) => {
    req.limit = req.body.limit ? parseInt(req.body.limit) : 20;
    req.skip = req.body.skip ? parseInt(req.body.skip) : 0;
    next();
}

module.exports = {
    LimitSkipGet,
    LimitSkipPost
};