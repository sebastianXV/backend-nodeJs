const Director = require('../models/director');
const { request, response } = require('express');

/**
 * Crear un director
 */
const createDirector = async (req = request, res = response) => {
    const { nombres } = req.body;

    try {
        const directorDB = await Director.findOne({ nombres });
        if (directorDB) {
            return res.status(400).json({ msj: 'Ya existe un director con esos nombres' });
        }

        const director = new Director({
            nombres
        });
        await director.save();

        return res.status(201).json(director);
    } catch (error) {
        console.error('Error al crear el director:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Consultar todos los directores
 */
const getAllDirectores = async (req = request, res = response) => {
    try {
        const directores = await Director.find();
        return res.status(200).json(directores);
    } catch (error) {
        console.error('Error al obtener los directores:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Obtener director por ID
 */
const getDirectorById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const director = await Director.findById(id);
        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' });
        }

        return res.status(200).json(director);
    } catch (error) {
        console.error('Error al obtener el director:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Actualizar director
 */
const updateDirector = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombres, estado } = req.body;

    try {
        const director = await Director.findByIdAndUpdate(
            id,
            { nombres, estado },
            { new: true }
        );

        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' });
        }

        return res.status(200).json(director);
    } catch (error) {
        console.error('Error al actualizar el director:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Eliminar director por ID
 */
const deleteDirector = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const director = await Director.findByIdAndDelete(id);

        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar el director:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createDirector,
    getAllDirectores,
    getDirectorById,
    updateDirector,
    deleteDirector
};
