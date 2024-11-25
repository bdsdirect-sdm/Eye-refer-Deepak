import { Request, Response } from "express";
import { constantValues } from "../constants";
import { ReturnResult } from "../interfaces/returnResultInterface";
import AppError from "../utils/errorHandler";
import db from "../models";
import { hassedPassword } from "../utils/hassedPassword";
import { generateOTP } from "../utils/generateOtp";
import { sendMail } from "../config/mailConnect";

const doctorSignUp = async (req:Request):Promise<ReturnResult> =>{
    let {name , email, doctorType, password, acitve = false} = req.body;

    // check user if it is exits or not
    const existDoctor = await  db.Doctor.findOne({
        where:{
            email:email,
            acitve :true,
        }
    });
    let newDoctor;

    password = await hassedPassword(password);

    if(existDoctor){
        throw new AppError(constantValues.msg.alreadyExist,constantValues.msgCode.conflictCode);
    }
    else{
        newDoctor = await db.Doctor.create({name,email,doctorType,password});
        const otp = generateOTP()
        await db.Otp.create({email,otp});

        await sendMail(email,"Otp Varification",`Your Varification Otp is ${otp}`)

    }

    const result : ReturnResult =  {
        success:constantValues.msgType.successStatus,
        message:constantValues.msg.signUpMessage,
        data:newDoctor
    }
    return result;  
}

export default {doctorSignUp};