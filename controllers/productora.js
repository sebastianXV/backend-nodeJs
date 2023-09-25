const Productora = require('../models/productora');
const { request, response } = require('express');

const createProductora = async (req = request, res = response) => {
    const { nombre, slogan, descripcion } = req.body;
    try {
        const productora = new Productora({ nombre, slogan, descripcion });
        await productora.save();
        return res.status(201).json(productora);
    } catch (error) {
        console.error('Error al crear la productora:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getAllProductoras = async (req = request, res = response) => {
    try {
        const productoras = await Productora.find();
        return res.json(productoras);
    } catch (error) {
        console.error('Error al obtener las productoras:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const getProductoraById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const productora = await Productora.findById(id);
        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' });
        }
        return res.json(productora);
    } catch (error) {
        console.error('Error al obtener la productora por ID:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const updateProductora = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, estado, slogan, descripcion } = req.body;
    try {
        const productora = await Productora.findByIdAndUpdate(id, { nombre, estado, slogan, descripcion }, { new: true });
        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' });
        }
        return res.json(productora);
    } catch (error) {
        console.error('Error al actualizar la productora:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

const deleteProductora = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const productora = await Productora.findByIdAndDelete(id);
        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' });
        }
        return res.json({ msj: 'Productora eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar la productora:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createProductora,
    getAllProductoras,
    getProductoraById,
    updateProductora,
    deleteProductora
};
