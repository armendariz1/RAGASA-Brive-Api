const express = require("express");
const router = express.Router();
const ejecucionesController = require('../controllers/ejecucionesController');

router
        .post("/getallview/",ejecucionesController.getAllView2);

module.exports = router
