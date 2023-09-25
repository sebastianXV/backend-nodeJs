const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productora');

// Crear una nueva productora
router.post('/', productoraController.createProductora);

// Obtener todas las productoras
router.get('/', productoraController.getAllProductoras);

// Obtener una productora por su ID
router.get('/:id', productoraController.getProductoraById);

// Actualizar una productora por su ID
router.put('/:id', productoraController.updateProductora);

// Eliminar una productora por su ID
router.delete('/:id', productoraController.deleteProductora);

module.exports = router;
