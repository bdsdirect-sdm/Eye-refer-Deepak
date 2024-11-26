import dotenv from "dotenv";
dotenv.config({path:`src/config/.env.${process.env.NODE_ENV}`});

import passport from "./middleware/passportConfig"
import express , { Request, Response} from "express";
import cors from "cors"
import ErrorMiddleware from "./middleware/Error";
import allRoutes from "./routes";

const app = express();

app.use(cors({
    origin:"*",
}))
app.use(express.json());
app.use(passport.initialize())
app.use("/api/v1", allRoutes)

app.get("/", (req : Request, res:any) => res.json({ success: true, message: "Server is Running"}));

app.use(ErrorMiddleware)
export default app;