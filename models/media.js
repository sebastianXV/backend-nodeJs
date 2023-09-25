const { Schema, model } = require('mongoose');

const MediaSchema = Schema({
    serial: {
        type: String,
        unique: true,
        required: [true, 'Serial único de la producción requerido']
    },
    titulo: {
        type: String,
        required: [true, 'Título de la producción requerido'],
        minlength: 1
    },
    sinopsis: {
        type: String
    },
    urlPelicula: {
        type: String,
        unique: true
    },
    imagenPortada: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    anioEstreno: {
        type: Number
    },
    generoPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    directorPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }
});

module.exports = model('Media', MediaSchema);
