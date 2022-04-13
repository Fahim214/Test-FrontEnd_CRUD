import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId },
    nama: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product