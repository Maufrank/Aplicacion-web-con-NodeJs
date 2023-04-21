const mongoose = require("mongoose");

const FindJugador = async(modelo) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({});
    return resultado;
};

const addJugador = async(modelo, jugador) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const nube = new modelo(jugador);
    await nube.save();
}

const FindUpdateJugador = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.find({_id: id});
    return resultado;
}

const EliminaJugador = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const res = await modelo.findById(id);
    await res.delete();
}

const ActualizarJugador = async(modelo, object) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    const res = await modelo.findById(object._id);
    console.log(res)

    res.nombre = object.nombre ? object.nombre : res.nombre;
    res.fecha = object.fecha
        ? object.fecha
        : res.fecha;
    res.dorsal = object.dorsal
        ? object.dorsal
        : res.dorsal;
    res.genero = object.genero ? object.genero : res.genero;
    res.peso = object.peso ? object.peso : res.peso;

    res.posicion = object.posicion ? object.posicion : res.posicion;

    res.save();
}

const FindJugadorOne = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/barcelona");
    let resultado = await modelo.findById(id);
    return resultado;
}

module.exports = {FindJugador, addJugador, EliminaJugador, FindJugadorOne, FindJugador, ActualizarJugador, FindUpdateJugador};