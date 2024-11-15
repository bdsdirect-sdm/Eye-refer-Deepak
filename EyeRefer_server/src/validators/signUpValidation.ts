import {check} from "express-validator"
import Doctor from "../models/DoctorModel"

export const signUpValidation = [
    check("fname").not().isEmpty().withMessage("First Name is required"),
    check("lname").not().isEmpty().withMessage("Last Name is required"),
    check("email").isEmail().withMessage("Invalid Email").custom( async value =>{
        const user =  await Doctor.findOne({
            where:{
                email:value,
                active:true
            }
        })
        if(user){
            throw new Error("User already exist");
        }
    }),
    check("password").not().isLength({min:8}).withMessage("Password must be of length 8"),
    check("doctorType").not().isEmpty().withMessage("Doctor type is required"),

]