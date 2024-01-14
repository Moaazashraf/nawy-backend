"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addApartment = exports.getApartmentDetails = exports.listApartments = void 0;
const dataBase_1 = require("../dataBase");
//@desc Get all apartments
//@route GET /nawy/apartments/
//@access Public
const listApartments = (req, res) => {
    res.status(200).json({ data: dataBase_1.apartments });
};
exports.listApartments = listApartments;
//@desc Get apartment details
//@route GET /nawy/apartments/:id
//@access Public
const getApartmentDetails = (req, res) => {
    const apartmentId = parseInt(req.params.id);
    const apartment = dataBase_1.apartments.find((apt) => apt.id === apartmentId);
    if (apartment) {
        res.status(200).json({ data: apartment });
    }
    else {
        res.status(404).json({ message: "Apartment not found" });
    }
};
exports.getApartmentDetails = getApartmentDetails;
//@desc Add apartment
//@route POST /nawy/apartments/add
//@access Public
const addApartment = (req, res) => {
    console.log("Received dataaaa:", req.body);
    const newApartment = req.body;
    // Add the new apartment to the existing array
    dataBase_1.apartments.push(newApartment);
    res
        .status(201)
        .json({ message: "Apartment added successfully", data: newApartment });
};
exports.addApartment = addApartment;
