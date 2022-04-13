import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/db.js";
import cors from "cors"

import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

import productRoutes  from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"


const app = express()

dotenv.config({ path: 'server/config/config.env' })

connectDatabase()

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5600
app.listen(PORT, console.log(`Server is running on port ${PORT}`))