const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/userController");

router
    .get("/", controllerUser.getAllUser)
    .get("/:id", controllerUser.getUser)
    .post("/save/", controllerUser.saveUser);



module.exports = router