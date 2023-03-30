const express = require("express");
const router = express.Router();
const entidadController = require("../controllers/entidadController");

router
    .get("/", entidadController.getAll)
    .get("/combo",entidadController.getComboEntidades)
    .post("/save/",entidadController.saveEntidad);

module.exports = router