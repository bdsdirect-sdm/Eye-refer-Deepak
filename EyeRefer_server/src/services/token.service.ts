import jwt from "jsonwebtoken"
import db from "../models"
import AppError from "../utils/errorHandler";
import { constantValues } from "../constants";

interface User {
    id: number;
    name: string;
    email: string;
    doctorType:string;
  }

const generateToken = async (user:User):Promise<string> =>{
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new AppError(constantValues.msg.invalidCredentials,constantValues.msgCode.failureCode);
    }

    // Create the payload
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      doctorType:user.doctorType
    };

    // Generate the token
    const token =  jwt.sign(payload, secretKey, {
      expiresIn: "1h",
    });

    return token;
}

export default {
    generateToken,
}