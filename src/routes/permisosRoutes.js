const express = require("express");
const router = express.Router();
const permisosController = require("../controllers/permisoController");

router
    .get("/", permisosController.getAllPermisos)
    .get("/:id", permisosController.getById);
    // .post("/save/", controllerUser.saveUser);



module.exports = router