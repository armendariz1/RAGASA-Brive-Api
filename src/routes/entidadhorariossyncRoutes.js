const express = require("express");
const router = express.Router();
const entidadController = require("../controllers/entidadhorariosyncController");

router
    .get("/:id", entidadController.getAllEntidadHorariosByEntidadId)
    .post("/saveall/",entidadController.saveAllEntidadHorarios)
    .delete("/:id",entidadController.deleteEntidadHorarios);



module.exports = router