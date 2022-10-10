const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const {checkReq} = require('../middlewares/check-req');
const {
    createUser, 
    loginUser
} = require('../controllers/auth');

//Rutas de Autenticacion: host + /auth

router.post(
    "/create",
    [
        check('nombre', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es obligatorio').isLength({ min: 3}),     
        checkReq
    ],
    createUser
);

router.post(
    "/login",
    [
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es obligatorio').isLength({ min: 3 }),
        checkReq
    ], 
    loginUser   
);

module.exports = router;