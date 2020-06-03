// Ruta para crear proyectos

const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const { check } = require('express-validator');
const validarAuth = require('../middleware/validarAuth');

// Crea un proyecto

// api/proyectos

//Crear Proyecto
router.post('/',
    validarAuth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

// Obtener todos los proyectos por usuario

router.get('/',
    validarAuth,
    proyectoController.obtenerProyectos
);

// Actualizar Proyecto via ID

router.put('/:id',
    validarAuth,
    [
        check('nombre', 'El nombre del proyecto no es valido').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

module.exports = router;