import { Router } from "express";
import doctorController from "../controllers/doctorController";
import { Request } from "express";

const doctorRoutes = Router();

doctorRoutes
    .post("/signup", doctorController.doctorSignUp)
    .post("/otpVarify",doctorController.otpVarification)
    
    

export default doctorRoutes;
 