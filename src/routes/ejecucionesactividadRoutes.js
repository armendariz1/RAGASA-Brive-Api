const express = require("express");
const router = express.Router();
const ejecucionesActividadController = require('../controllers/ejecucionesactividadController');

router
    .get("/getAllByEjecucionId/:id", ejecucionesActividadController.getAllByEjecucionId);

module.exports = router