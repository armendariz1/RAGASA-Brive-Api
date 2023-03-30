const express = require("express");
const router = express.Router();
const actividadController = require('../controllers/actividadController');

router
    .post("/getAllByIds/", actividadController.getAllByIds);

module.exports = router