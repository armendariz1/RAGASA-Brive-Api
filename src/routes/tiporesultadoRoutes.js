const express = require("express");
const router = express.Router();
const tiporesultadoController = require('../controllers/tiporesultadoController');

router
        .get("/combo",tiporesultadoController.getCombo);

module.exports = router