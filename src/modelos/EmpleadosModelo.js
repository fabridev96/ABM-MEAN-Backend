const { Schema, model } = require('mongoose');

const SchemaEmpleados = new Schema({

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },

    pass: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    rol: {
        type: Number,
        default: 1
    }
    
}, {

    timestamps: true,
    versionKey: false

});

module.exports = model('EmpleadosModelo', SchemaEmpleados);