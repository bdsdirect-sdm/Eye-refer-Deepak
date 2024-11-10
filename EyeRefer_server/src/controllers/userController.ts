import Doctor from "../models/DoctorModel";
import Address from "../models/Address";
import { Request, Response, NextFunction } from "express";
import { signupInterface,loginInterface } from "../interfaces/userInterfaces";
import { hassedPassword } from "../utils/hassedPassword";
import { generateOTP } from "../utils/generateOtp";

export const singUp = async ( req:any, res:Response) =>{
    try{
        let {fname, lname, password, email, doctorType} = req.body

        const existUser = await Doctor.findOne({where:{email:email}})
        if(existUser){
            res.status(409).json({
                success:false,
                message:"User already exist"
            })
            return;
        }
        password = await hassedPassword(password);

        const user = await Doctor.create({fname,lname,email,password,doctorType})

        res.status(201).json({
            success:true,
            message:"User created successfully"
        })
        return;
    } catch(error){
        res.status(500).json({
            success:false,
            message: "Problem in creating User"
        })
    }
}