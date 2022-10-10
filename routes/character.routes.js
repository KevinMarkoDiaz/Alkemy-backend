const { Router } = require('express');
const { check } = require('express-validator');
const { checkJWT } = require('../middlewares/check-jwt');
const { checkReq } = require('../middlewares/check-req');
const { 
    createCharacter, 
    updateCharacter, 
    deleteCharacter, 
    getCharacters, 
    getCharacter 
} = require('../controllers/characters');

//Esta ruta se sirve en host + /characters

const router = Router();

router.use(checkJWT);

router.get('/', getCharacters);
router.get('/:id', getCharacter);
router.delete('/:id', deleteCharacter);
router.post(
    '/',
    [
        check('imagen', 'imagen es requerida').not().isEmpty(),
        check('nombre', 'nombre es requerido').not().isEmpty(),
        check('edad', 'edad es requerido').not().isEmpty(),
        check('peso', 'peso es requerido').not().isEmpty(),
        check('historia', 'historia es requerido').not().isEmpty(),
        checkReq
    ],
    createCharacter
);
router.put('/:id',
    [
        check('imagen', 'imagen es requerida').not().isEmpty(),
        check('nombre', 'nombre es requerido').not().isEmpty(),
        check('edad', 'edad es requerido').not().isEmpty(),
        check('peso', 'peso es requerido').not().isEmpty(),
        check('historia', 'historia es requerido').not().isEmpty(),
        checkReq
    ],
    updateCharacter
);

module.exports = router;
