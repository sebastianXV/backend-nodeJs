const { Router } = require('express');
const {
  createDirector,
  getAllDirectores,
  getDirectorById,
  updateDirector,
  deleteDirector
} = require('../controllers/director');

const router = Router();

// Crear un director
router.post('/', createDirector);

// Obtener todos los directores
router.get('/', getAllDirectores);

// Obtener un director por su ID
router.get('/:id', getDirectorById);

// Actualizar un director
router.put('/:id', updateDirector);

// Eliminar un director
router.delete('/:id', deleteDirector);

module.exports = router;
