import { Request, Response } from "express";
import { constantValues } from "../constants";
import { ReturnResult } from "../interfaces/returnResultInterface";

const doctorSignUp = async (req:Request):Promise<ReturnResult> =>{
    const  {name, email} = req.body;
    const result : ReturnResult =  {
        success:constantValues.msgType.successStatus,
        message:constantValues.msg.doctorAdd,
        data:null
    }
    return result;  
}

export default {doctorSignUp};