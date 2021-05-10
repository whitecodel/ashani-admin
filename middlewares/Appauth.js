const Auth = require('../models/Auth');
const jwt = require('jsonwebtoken');

const NotLoggedIn = async (req, res, next) => {
    try {
        const msg = 'Invalid Login';
        const{authorization} = req.headers;
        if (authorization == null) return res.status(401).send(msg);
        const token = authorization.replace('Bearer ', '');
        const payload = jwt.decode(token, process.env.TOKEN_SECRET);
        if (payload == null) return res.status(401).send(msg);
        const user = await Auth.findById(payload._id);
        if (!user) return res.status(401).send(msg);
        req.id = payload._id;
    } catch (error) {
        console.log(error);
        return res.status(401).send(msg);
    }
    next();
}

module.exports = {
    NotLoggedIn
};