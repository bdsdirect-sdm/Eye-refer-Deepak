import { Request, Response } from "express"
import { ReturnResult } from "../interfaces/returnResultInterface"
import { constantValues } from "../constants";
import db from "../models";
import { where } from "sequelize";
import AppError from "../utils/errorHandler";


const otpVarification = async (req:Request):Promise<ReturnResult> => {
    const {email, otp} = req.body;
    const storedOTP = await db.Otp.findOne({where:{email},order:[["createdAt","DESC"]]})

    if(otp ===  storedOTP?.otp){
        const doctor = await db.Doctor.findOne({where:{email:email}})
        if(!doctor){
            throw new AppError(constantValues.msg.invalidCredentials,constantValues.msgCode.badRequest)
        }
        const updatedDoctor = await doctor.update({active: true});
        return {
            success: constantValues.msgType.successStatus,
            message: constantValues.msg.profileUpdate,
            data: updatedDoctor
        }
    }
    else{
        throw new AppError(constantValues.msg.invalidOtp, constantValues.msgCode.failureCode)
    }
}

export default {otpVarification}