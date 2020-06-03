const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// api/auth
router.post('/',
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 carácteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
);

module.exports = router;