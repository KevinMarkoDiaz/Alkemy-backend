const { Router } = require('express');
const { check } = require('express-validator');
const { checkJWT } = require('../middlewares/check-jwt');
const { checkReq } = require('../middlewares/check-req');
const { isDate } = require('../helpers/isDate');
const { 
    createMovieOrSerie, 
    updateMovieOrSerie, 
    deleteMovieOrSerie, 
    getMovieOrSeries, 
    getMovieOrSerie 
} = require('../controllers/movieOrSerie');

//Esta ruta se sirve en host + /movie-or-series

const router = Router();

router.use(checkJWT);

router.get('/', getMovieOrSeries);
router.get('/:id', getMovieOrSerie);
router.delete('/:id', deleteMovieOrSerie);
router.post(
    '/',
    [
        check('titulo', 'titulo es requeridp').not().isEmpty(),
        check('imagen', 'imagen es requerida').not().isEmpty(),
        check('fecha_de_creacion', 'fecha de creacion es requerido').custom(isDate),
        check('calificacion', 'calificacion es requerido').not().isEmpty(),
        checkReq
    ],
    createMovieOrSerie
);
router.put('/:id',
[
    check('titulo', 'titulo es requeridp').not().isEmpty(),
    check('imagen', 'imagen es requerida').not().isEmpty(),
    check('fecha_de_creacion', 'fecha de creacion es requerido').custom(isDate),
    check('calificacion', 'calificacion es requerido').not().isEmpty(),
    checkReq
],
    updateMovieOrSerie
);

module.exports = router;
