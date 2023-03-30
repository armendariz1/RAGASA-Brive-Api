const express = require("express");
const router = express.Router();
const horariosyncController = require("../controllers/horariosyncController");

router
    .get("/", horariosyncController.getAll);



module.exports = router