const { Router } = require('express');
const { check } = require('express-validator');
const { checkJWT } = require('../middlewares/check-jwt');
const { checkReq } = require('../middlewares/check-req');

const { 
    createGenre, 
    updateGenre, 
    deleteGenre, 
    getGenres, 
    getGenre 
} = require('../controllers/Genre');

//Esta ruta se sirve en host + /genre

const router = Router();

router.use(checkJWT);

router.get('/', getGenres);
router.get('/:id', getGenre);
router.delete('/:id', deleteGenre);
router.post(
    '/',
    [
        check('nombre', 'titulo es requeridp').not().isEmpty(),
        check('imagen', 'imagen es requerida').not().isEmpty(),     
        checkReq
    ],
    createGenre
);
router.put('/:id',
[
    check('nombre', 'titulo es requeridp').not().isEmpty(),
    check('imagen', 'imagen es requerida').not().isEmpty(),
    checkReq
],
    updateGenre
);

module.exports = router;
