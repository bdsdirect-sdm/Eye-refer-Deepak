import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/dbconnect";

import Doctor from "./Doctor";
import Patient from "./Patient";
import Otp from "./Otp";
import Address from "./Address";

interface DB{
    [key:string]:any
}
export const  db:DB = {
    Doctor:  Doctor,  
    Patient: Patient,
    Address:  Address,
    Otp:  Otp,
};


// export default db;
