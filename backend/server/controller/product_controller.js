const User = require("../models/customerSchema");
const fs = require("fs")

const getProducts = async (req, res) => {
    try {
        const product = await User.find({})
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await User.findById(id)
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (req, res) => {
    const { originalname, path } = req.file
    const parts = originalname.split(".")
    const ext = parts[parts.length - 1]
    const newPath = path + "." + ext
    fs.renameSync(path, newPath)

    const { comp, type } = req.body
    try {
        const product = await User.create({
            comp,
            type,
            image: newPath,
        })
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    const { originalname, path } = req.file
    const parts = originalname.split(".")
    const ext = parts[parts.length - 1]
    const newPath = path + "." + ext
    fs.renameSync(path, newPath)

    const { id } = req.params
    const { comp, type } = req.body;
    try {
        const product = await User.findByIdAndUpdate(id, {
            comp,
            type,
            image: newPath,
        })
        if (!product) {
            res.status(404).json({ message: "product not found" })
        } else {
            res.status(200).json("ok");
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    console.log(99);
    try {
        const { id } = req.params
        const product = await User.findByIdAndDelete(id)
        if (!product) {
            res.status(404).json({ message: "product not found" })
        } else {
            res.status(200).json("ok");
        }
    } catch (error) {
        console.log(error);
    }
}

// const deleteAll = async (req, res) => {
//     try {
//         const product = await User.deleteMany({})
//         if (!product) {
//             res.status(404).json({ message: "product not found" })
//         } else {
//             res.status(200).json({ message: "dleted all succes", product })
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    // deleteAll,
}