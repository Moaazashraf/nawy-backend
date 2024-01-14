// ApartmentController.ts
import { Request, Response } from "express";
import { apartments } from "../dataBase";
import { ApartmentType } from "../src/utils/dataTypes";

//@desc Get all apartments
//@route GET /nawy/apartments/
//@access Public
export const listApartments = (req: Request, res: Response) => {
  res.status(200).json({ data: apartments });
};

//@desc Get apartment details
//@route GET /nawy/apartments/:id
//@access Public
export const getApartmentDetails = (req: Request, res: Response) => {
  const apartmentId = parseInt(req.params.id);

  const apartment = apartments.find((apt) => apt.id === apartmentId);

  if (apartment) {
    res.status(200).json({ data: apartment });
  } else {
    res.status(404).json({ message: "Apartment not found" });
  }
};

//@desc Add apartment
//@route POST /nawy/apartments/add
//@access Public
export const addApartment = (
  req: Request<{}, {}, ApartmentType>,
  res: Response
) => {
  const newApartment: ApartmentType = req.body;
  newApartment.id = apartments.length + 1;
  // Add the new apartment to the existing array
  apartments.push(newApartment);

  res
    .status(201)
    .json({ message: "Apartment added successfully", data: apartments });
};
