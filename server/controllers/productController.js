import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js"


// get all product
export const getAllProduct = asyncHandler(async (req, res) => {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
    ? {
        name: {
            $regex: req.query.keyword,
            $option: "i"
        },
    }
    : {};

    const count = await Product.countDocuments({...keyword})
    const products = await Product.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    res.status(201).json({
        success: true,
        products,
        page,
        pages: Math.ceil(count / pageSize)
    })
})


// Create product
export const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image || "/images/simple.png"
    })

    const createdProduct = await product.save()

    res.status(201).json({
        success: true,
        product: createdProduct
    })
})


// Update Product
export const updateProduct = asyncHandler(async(req, res) => {
    let product = await Product.findById(req.params.id)

    if(product) {
        product.name = req.body.name,
        product.price = req.body.price,
        product.image = req.body.image || "/images/simple.png"

        const updatedProduct = await product.save()

        res.status(201).json({
            success: true,
            product: createdProduct
        })
    } else {
        res.status(401)
        throw new Error("Product Not Found")
    }
})