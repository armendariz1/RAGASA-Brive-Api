const express = require("express");
const router = express.Router();
const origenesController = require('../controllers/origenesController');

router
        .get("/combo",origenesController.getComboOrigenes);

module.exports = router