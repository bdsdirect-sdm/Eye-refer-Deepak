import * as dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"

const app = express()

app.use(cors({
    origin:"*"
}))
app.use(express.json());

// app.use("/api/v1",routes);

export default app;