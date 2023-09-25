const Media = require('../models/media');
const { request, response } = require('express');

// Crear un medio
const createMedia = async (req = request, res = response) => {
    const {
        serial,
        titulo,
        sinopsis,
        urlPelicula,
        imagenPortada,
        anioEstreno,
        generoPrincipal,
        directorPrincipal,
        productora,
        tipo
    } = req.body;

    try {
        const media = new Media({
            serial,
            titulo,
            sinopsis,
            urlPelicula,
            imagenPortada,
            anioEstreno,
            generoPrincipal,
            directorPrincipal,
            productora,
            tipo
        });

        await media.save();

        return res.status(201).json(media);
    } catch (error) {
        console.error('Error al crear el media:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

// Obtener todos los medios
const getAllMedia = async (req = request, res = response) => {
    try {
        const mediaList = await Media.find();
        return res.status(200).json(mediaList);
    } catch (error) {
        console.error('Error al obtener los media:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

// Obtener un medio por su ID
const getMediaById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const media = await Media.findById(id);
        if (!media) {
            return res.status(404).json({ msj: 'Media no encontrado' });
        }
        return res.status(200).json(media);
    } catch (error) {
        console.error('Error al obtener el media:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

// Actualizar un medio por su ID
const updateMedia = async (req = request, res = response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedMedia = await Media.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedMedia) {
            return res.status(404).json({ msj: 'Media no encontrado' });
        }
        return res.status(200).json(updatedMedia);
    } catch (error) {
        console.error('Error al actualizar el media:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

// Eliminar un medio por su ID
const deleteMedia = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const deletedMedia = await Media.findByIdAndDelete(id);
        if (!deletedMedia) {
            return res.status(404).json({ msj: 'Media no encontrado' });
        }
        return res.status(200).json({ msj: 'Media eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el media:', error);
        return res.status(500).json({ msj: 'Error interno del servidor' });
    }
};

module.exports = {
    createMedia,
    getAllMedia,
    getMediaById,
    updateMedia,
    deleteMedia
};
