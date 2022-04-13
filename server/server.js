import express from "express";
import dotenv from "dotenv"
// import morgan from "morgan";
import path from "path"

import connectDatabase from "./config/db.js";

const app = express()

dotenv.config({ path: 'server/config/config.env' })

connectDatabase()

const PORT = process.env.PORT || 5600
app.listen(PORT, console.log(`Server is running on port ${PORT}`))