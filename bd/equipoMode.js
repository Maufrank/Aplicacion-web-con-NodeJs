const mongoose = require("mongoose");

const EquipoVEsquema = () => {
    return new mongoose.Schema({
        nombreE: String,
        fechaE: Date,
        titulos: String,
        liga: String,
        division: String,
        nacionalidad: String,
    });
};

let EquipoEsquema = EquipoVEsquema();

module.exports = mongoose.model("Equipo", EquipoEsquema);