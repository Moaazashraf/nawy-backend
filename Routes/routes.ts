import express, { Router, Request, Response } from "express";
import {
  addApartment,
  getApartmentDetails,
  listApartments,
} from "../Controllers/ApartmentController";

const router: Router = express.Router();

router.route("/").get(listApartments);
router.route("/:id").get(getApartmentDetails);
router.route("/add").post(addApartment);

export default router;
