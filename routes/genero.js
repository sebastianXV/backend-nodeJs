const { Router } = require('express');
const {
    createGenero,
    getAllGeneros,
    getGeneroById,
    updateGenero,
    deleteGenero,
    getGeneroByEstado
} = require('../controllers/genero');

const router = Router();

/**
 * Crear un género
 */
router.post('/', createGenero);

/**
 * Consultar todos los géneros
 */
router.get('/', getAllGeneros);


/**
 * Consultar un género por su Estado
 */
router.get('/:estado', getGeneroByEstado);


/**
 * Consultar un género por su ID
 */
router.get('/:id', getGeneroById);



/**
 * Actualizar un género
 */
router.put('/:id', updateGenero);

/**
 * Borrar un género por su ID
 */
router.delete('/:id', deleteGenero);

module.exports = router;
