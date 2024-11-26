import { Router } from "express";
import doctorController from "../controllers/doctorController";
import { Request } from "express";

const doctorRoutes = Router();

doctorRoutes
    .post("/signup", doctorController.doctorSignUp)
    .post("/otpVarify",doctorController.otpVarification)
    .post("/login",doctorController.doctorLogin)
    
    

export default doctorRoutes;
 