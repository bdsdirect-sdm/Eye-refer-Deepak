import db from "../models";
import { Request, Response } from "express";
import { hassedPassword } from "../utils/hassedPassword";

export const singUp = async ( req:any, res:Response) =>{
    try{
        let {fname, lname, password, email, doctorType} = req.body

        const existUser = await db.Doctor.findOne({where:{email:email}})
        if(existUser){
            res.status(409).json({
                success:false,
                message:"User already exist"
            })
            return;
        }
        password = await hassedPassword(password);

        const user = await db.Doctor.create({fname,lname,email,password,doctorType})

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