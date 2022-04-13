import express from "express";
// import dotenv from "dotenv"
// import morgan from "morgan";

const app = express()

const PORT = process.env.PORT || 5600
app.listen(PORT, console.log(`Server is running on port ${PORT}`))