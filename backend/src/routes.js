const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

const routes = express.Router();
const upload = multer(uploadConfig);

//Criar
routes.post("/sessions", SessionController.store);

//Listar
routes.get("/spots", SpotController.index);

//Criar
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
