import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// Login Untuk User
export const loginUser = asyncHandler (async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            }
        })
    } else {
        res.status(401)
        throw new Error("Invalid Email or User")
    }
})


// register user
export const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email })

    if(userExist) {
        res.status(401)
        throw new Error("User Already Exist")
    }

    const user = await User.create({ name, email, password })

    res.status(201).json({
        success: true,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        }
    })
})