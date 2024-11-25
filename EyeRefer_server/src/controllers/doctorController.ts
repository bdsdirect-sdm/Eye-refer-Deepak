import db from "../models";
import { Request, Response } from "express";
import { hassedPassword } from "../utils/hassedPassword";
import { catchAsyncError } from "../middleware/catchAsyncError";
import doctorService from "../services/doctor.service";
import { defaultMaxListeners } from "events";
import { ReturnResult } from "../interfaces/returnResultInterface";
import otpService from "../services/otp.service";


const doctorSignUp = catchAsyncError(async (req , res) =>{
    const result : ReturnResult = await doctorService.doctorSignUp(req);
    res.status(201).json(result);
})

const otpVarification = catchAsyncError(async(req,res) =>{
    const result :ReturnResult = await otpService.otpVarification(req)

    res.status(201).json(result);
})

export default {doctorSignUp,otpVarification};
