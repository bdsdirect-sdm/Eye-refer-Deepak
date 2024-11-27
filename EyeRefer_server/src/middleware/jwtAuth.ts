import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "./catchAsyncError";
import AppError from "../utils/errorHandler";
import db from "../models";


const jwtODDoctor = catchAsyncError( async (req:Request, res:Response, next:NextFunction    ) => {
    passport.authenticate("bearer",{session:false}, (err:any, user:any, info:any) =>{
        if(err) {
            return next(err)
        }
        if(!user) { 
            return res.status(401).json({error:"Unauthorized"})
        }
        if(user.doctorType === "OD"){
            req.user = user;
            next()
        }

    }) 
})  


export default {
    jwtODDoctor,
}