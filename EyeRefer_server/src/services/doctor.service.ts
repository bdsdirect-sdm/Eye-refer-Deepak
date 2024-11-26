import { Request, Response } from "express";
import { constantValues } from "../constants";
import { ReturnResult } from "../interfaces/returnResultInterface";
import AppError from "../utils/errorHandler";
import db from "../models";
import { hassedPassword } from "../utils/hassedPassword";
import { generateOTP } from "../utils/generateOtp";
import { sendMail } from "../config/mailConnect";
import bcrypt from "bcrypt"
import tokenService from "./token.service";

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


// doctor login crediantials
const doctorLogin = async (req:Request):Promise<ReturnResult> =>{
    const {email, password}  = req.body;

    let doctor = await db.Doctor.findOne({where:{email:email}});
    if(!doctor){
        throw new AppError(constantValues.msg.userNotExist,constantValues.msgCode.badRequest)
    }

    if(! await bcrypt.compare(password,doctor?.password)){
        throw new AppError(constantValues.msg.incorrectPassword,constantValues.msgCode.badRequest)
    }

    const token = tokenService.generateToken({id:doctor?.id,name:doctor?.name,email:doctor?.email})

    const result : ReturnResult =  {
        success:constantValues.msgType.successStatus,
        message:constantValues.msg.signUpMessage,
        data:{
            token,
            doctor
        }
    }
    return result
}

export default {
    doctorSignUp,
    doctorLogin
};