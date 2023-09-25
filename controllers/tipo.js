const Tipo = require('../models/tipo');
const { request, response } = require('express');

const createTipo = async (req = request, res = response) => {
    const { nombre, descripcion } = req.body;
    try {
        const tipoDB = await Tipo.findOne({ nombre });
        if (tipoDB) {
            return res.status(400).json({ msj: 'Ya existe un tipo con ese nombre' });
        }

        const tipo = new Tipo({ nombre, descripcion });
        await tipo.save();

        return res.status(201).json(tipo);
    } catch (error) {
        console.error('Error al crear el tipo:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getAllTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipo.find();
        return res.json(tipos);
    } catch (error) {
        console.error('Error al obtener los tipos:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getTipoById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const tipo = await Tipo.findById(id);
        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' });
        }
        return res.json(tipo);
    } catch (error) {
        console.error('Error al obtener el tipo por ID:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateTipo = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const tipo = await Tipo.findByIdAndUpdate(id, { nombre, descripcion }, { new: true });
        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' });
        }
        return res.json(tipo);
    } catch (error) {
        console.error('Error al actualizar el tipo:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const deleteTipo = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const tipo = await Tipo.findByIdAndDelete(id);
        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' });
        }
        return res.json({ msj: 'Tipo eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el tipo:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createTipo,
    getAllTipos,
    getTipoById,
    updateTipo,
    deleteTipo
};
