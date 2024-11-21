import { Router } from "express";
import doctorController from "../controllers/doctorController";
import { Request } from "express";

const doctorRoutes = Router();

doctorRoutes
    .post("/signup", doctorController.doctorSignUp)
    .get("/", (req : Request, res:any) => res.json({ success: true, message: "get add my doctorRoutes"}));
    

export default doctorRoutes;
 