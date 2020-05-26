const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const ProfileController = require("./controllers/ProfileController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectController = require("./controllers/RejectController");

const routes = express.Router();
const upload = multer(uploadConfig);

//Criar
routes.post("/sessions", SessionController.store);

//Listar
routes.get("/spots", SpotController.index);

//Criar
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

//Listar
routes.get("/profile", ProfileController.show);

//Criar
routes.post("/spots/:spot_id/bookings", BookingController.store);

//Aprovar
routes.post("/bookings/:booking_id/approvals", ApprovalController.store);

//Reject
routes.post("/bookings/:booking_id/rejections", RejectController.store);

module.exports = routes;
