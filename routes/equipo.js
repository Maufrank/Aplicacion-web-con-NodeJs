const {Router} = require("express");
const {equipoGet, equipoAddGet, equipoAddPost, equipoEditarGet, equipoActualizar, equipoEliminarGet} = require("../controller/equipo");

const router = Router();

router.get("/equipo" , equipoGet);
router.get("/addEquipo", equipoAddGet);
router.post("/agregarEquipo", equipoAddPost);
router.get("/eliminarEquipo/:id", equipoEliminarGet);
router.get("/actualizarEquipo/:id", equipoEditarGet);
router.post("/updateEquipo", equipoActualizar);

// router.post("/actualizarUnicornio/{{_id}}");

// module.exports = router;