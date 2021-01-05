/**
 * Ruta: /api/medicos
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
  getMedicos,
  crearMedico,
  actualizarMedico,
  borrarMedico,
  getMedicoById
} = require('../controllers/medicos')

const router = Router();

router.get( '/', validarJWT, getMedicos);

router.post( '/', 
  [
    validarJWT,
    check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
    check('hospital', 'El id del hospital debe ser valido').isMongoId(),
    validarCampos
  ],
  crearMedico);

router.put( '/:id', 
  [
    validarJWT,
    check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
    check('hospital', 'El id del hospital debe ser valido').isMongoId(),
    validarCampos
  ],
  actualizarMedico
);

router.delete( '/:id', validarJWT, borrarMedico );

router.get( '/:id', validarJWT, getMedicoById );



module.exports = router;
