const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/media');

// Rutas para el recurso "Media"

// Crear un medio
router.post('/', mediaController.createMedia);

// Obtener todos los medios
router.get('/', mediaController.getAllMedia);

// Obtener un medio por su ID
router.get('/:id', mediaController.getMediaById);

// Actualizar un medio por su ID
router.put('/:id', mediaController.updateMedia);

// Eliminar un medio por su ID
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
