import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false}
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enterdPassword) {
    return bcrypt.compareSync(enterdPassword, this.password)
}

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next()
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(this.password, salt)

    this.password = hash
})

const User = mongoose.model("User", userSchema)
export default User