const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");

main().catch((err) => console.log(err));

async function main() {
    const servidor = express();

    servidor.use(bodyParser.urlencoded({extended: true}));

    hbs.registerPartials("./views/parciales");
    servidor.use('/', require("./routes/jugador"));
    // servidor.use('/equipo', require("./routes/equipo"));
    servidor.set("view engine", "hbs");

    servidor.listen(8080, () => {
        console.log("Servidor corriendo");
    });
}
