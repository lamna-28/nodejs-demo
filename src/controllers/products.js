import Product from "../models/Product";
import dotenv from "dotenv";
import productSchema from "../validations/product";
dotenv.config()

const { API_URL } = process.env;

export const create = async (req, res) => {
    try {
        const data = await Product.create(req.body)
        if (!data) {
            return res.status(404).json({
                message: "Create Product faile"
            })
        } return res.status(200).json({
            message: "Create Product succesfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const update = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({
                message: "Update Product faile"
            })
        } return res.status(200).json({
            message: "Update Product succesfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const data = await Product.find({})
        if (!data) {
            return res.status(404).json({
                message: "Get All Product faile"
            })
        } return res.status(200).json({
            message: "Get All Product succesfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getDetail = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Get Detail Product faile"
            })
        } return res.status(200).json({
            message: "Get Detail Product succesfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Remove Product faile"
            })
        } return res.status(200).json({
            message: "Remove Product succesfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}