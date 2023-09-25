const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipo');


// Crear un nuevo tipo
router.post('/', tipoController.createTipo);

// Obtener todos los tipos
router.get('/', tipoController.getAllTipos);

// Obtener un tipo por su ID
router.get('/:id', tipoController.getTipoById);

// Actualizar un tipo por su ID
router.put('/:id', tipoController.updateTipo);

// Eliminar un tipo por su ID
router.delete('/:id', tipoController.deleteTipo);

module.exports = router;
