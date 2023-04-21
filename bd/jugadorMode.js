const mongoose = require("mongoose");

const jugadorVEsquema = () => {
    return new mongoose.Schema({
        nombre: String,
        fecha: Date,
        dorsal: Number,
        peso: Number,
        genero: String,
        posicion: String,
    });
};

let jugadorEsquema = jugadorVEsquema();

module.exports = mongoose.model("jugador", jugadorEsquema);