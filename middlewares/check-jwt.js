const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const checkJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        })
    };

    try {
        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED)
        req.uid = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        })
    };


    next();

};

module.exports = {
    checkJWT
}