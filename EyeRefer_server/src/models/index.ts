import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/dbconnect";

import Doctor from "./Doctor";
import Patient from "./Patient";
import Otp from "./Otp";
import Address from "./Address";

interface DB{
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
    Doctor: typeof Doctor;
    Patient: typeof Patient;
    Address: typeof Address;
    Otp: typeof Otp;
}

 const  db:DB = {
    sequelize,
    Sequelize,
    Doctor,
    Patient,
    Address,
    Otp,
};


export default db;
