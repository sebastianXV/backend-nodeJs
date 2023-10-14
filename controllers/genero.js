const Genero = require('../models/genero');
const { request, response } = require('express');

/**
 * Crear un género
 */
const createGenero = async (req = request, res = response) => {
    const { nombre, descripcion } = req.body;
    try {
        const generoDB = await Genero.findOne({ nombre });
        if (generoDB) {
            return res.status(400).json({ msj: 'Ya existe un género con ese nombre' });
        }

        const genero = new Genero({ nombre, descripcion });
        await genero.save();

        return res.status(201).json(genero);
    } catch (error) {
        console.error('Error al crear el género:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Consultar todos los géneros
 */
const getAllGeneros = async (req = request, res = response) => {
    try {
        const generos = await Genero.find();
        return res.json(generos);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Consultar un género por su ID
 */
const getGeneroById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findById(id);
        if (!genero) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }
        return res.json(genero);
    } catch (error) {
        console.error('Error al obtener el género:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Consultar un género por su Estado
 */
const getGeneroByEstado = async (req = request, res = response) => {
    try {
        const { estado } = req.query;
        const generos = await Genero.find({ estado });

        return res.json(generos);
    } catch (error) {
        console.error('Error al obtener el género:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Actualizar un género
 */
const updateGenero = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const generoActualizado = await Genero.findByIdAndUpdate(id, { nombre, descripcion }, { new: true });
        if (!generoActualizado) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }
        return res.json(generoActualizado);
    } catch (error) {
        console.error('Error al actualizar el género:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

/**
 * Borrar un género por su ID
 */
const deleteGenero = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const generoEliminado = await Genero.findByIdAndDelete(id);
        if (!generoEliminado) {
            return res.status(404).json({ msj: 'Género no encontrado' });
        }
        return res.json({ msj: 'Género eliminado correctamente', genero: generoEliminado });
    } catch (error) {
        console.error('Error al eliminar el género:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};


module.exports = {
    createGenero,
    getAllGeneros,
    getGeneroById,
    getGeneroByEstado,
    updateGenero,
    deleteGenero
};
