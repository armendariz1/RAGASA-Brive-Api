const express = require("express");
const router = express.Router();
const permisosController = require("../controllers/usuariopermisoController");

router
    .get("/:id", permisosController.getAllPermisosByUsuarioId)
    .post("/save/",permisosController.savePermisosUsuario)
    .post("/saveall/",permisosController.saveAllPermisosUsuario)
    .delete("/:id",permisosController.deletePermisosUsuario);
    // .get("/:id", controllerUser.getUser)
    // .post("/save/", controllerUser.saveUser);



module.exports = router