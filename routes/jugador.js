const {Router} = require("express");
const {jugadorGet, jugadorAddGet, jugadorAddPost, jugadorEditarGet, jugadorActualizar, jugadorEliminarGet, buscarPosicion} = require("../controller/jugador");
const {equipoGet, equipoAddGet, equipoAddPost, equipoEditarGet, equipoActualizar, equipoEliminarGet, inicioGet} = require("../controller/equipo");

const router = Router();

router.get("/" , inicioGet);
router.get("/addJugador", jugadorAddGet);
router.post("/agregarJugador", jugadorAddPost);
router.get("/eliminarJugador/:id", jugadorEliminarGet);
router.get("/actualizarJugador/:id", jugadorEditarGet);
router.post("/updateJugador", jugadorActualizar);
router.get("/jugador" , jugadorGet);
router.get("/filtroPosicion", buscarPosicion)
router.get("/equipo" , equipoGet);
router.get("/addEquipo", equipoAddGet);
router.post("/agregarEquipo", equipoAddPost);
router.get("/eliminarEquipo/:id", equipoEliminarGet);
router.get("/actualizarEquipo/:id", equipoEditarGet);
router.post("/updateEquipo", equipoActualizar);

// router.post("/actualizarUnicornio/{{_id}}");

module.exports = router;
