import dotenv from "dotenv";
dotenv.config({path:`./src/config/.env.${process.env.NODE_ENV}`});
console.log(process.env.NODE_ENV)

import express from "express";
import cors from "cors"
import ErrorMiddleware from "./middleware/Error";

const app = express()

app.use(cors({
    origin:"*",
}))
app.use(express.json());
app.use(ErrorMiddleware)

export default app;