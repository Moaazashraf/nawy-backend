"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApartmentController_1 = require("../Controllers/ApartmentController");
const router = express_1.default.Router();
router.route("/").get(ApartmentController_1.listApartments);
router.route("/:id").get(ApartmentController_1.getApartmentDetails);
router.route("/add").post(ApartmentController_1.addApartment);
exports.default = router;
