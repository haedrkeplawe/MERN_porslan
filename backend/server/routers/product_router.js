const express = require("express")
const product_controller = require("../controller/product_controller")
const router = express.Router()
const multer = require("multer");
const path = require("path");
const User = require("../models/customerSchema");
const uploadMiddleware = multer({ dest: "uploads/" })


// up image


router.get("/", product_controller.getProducts)

router.get("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await User.findById(id)
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

router.get("/view/:id", product_controller.getProduct)

router.post("/user/add", uploadMiddleware.single("file"), product_controller.addProduct)

router.post("/user/add/:id", uploadMiddleware.single("file"), product_controller.updateProduct)

router.get("/delete/:id", product_controller.deleteProduct)

// router.delete("/deleteAll", product_controller.deleteAll)

module.exports = router