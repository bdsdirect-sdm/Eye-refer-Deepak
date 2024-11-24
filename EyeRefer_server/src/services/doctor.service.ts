import { Request, Response } from "express";
import { constantValues } from "../constants";
import { ReturnResult } from "../interfaces/returnResultInterface";
import AppError from "../utils/errorHandler";

const doctorSignUp = async (req:Request):Promise<ReturnResult> =>{
    const {name , email, doctorType, password, acitve = false} = req.body;
    if(! name || !email){
        throw new AppError(constantValues.msg.passwordChangeEmail,constantValues.msgCode.conflictCode)
        
    }
    const result : ReturnResult =  {
        success:constantValues.msgType.successStatus,
        message:constantValues.msg.doctorAdd,
        data:null
    }
    return result;  
}

export default {doctorSignUp};