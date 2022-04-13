import express from "express";
import dotenv from "dotenv"
// import morgan from "morgan";
import path from "path"

import productRoutes  from "./routes/productRoutes.js"


const app = express()

dotenv.config({ path: 'server/config/config.env' })

import connectDatabase from "./config/db.js";


connectDatabase()

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5600
app.listen(PORT, console.log(`Server is running on port ${PORT}`))