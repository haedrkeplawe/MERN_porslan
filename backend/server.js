require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const mongoose = require("mongoose");
const router = require("./server/routers/product_router")
const cors = require("cors")



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", router)
app.use("/uploads", express.static(__dirname + "/uploads"))

mongoose
    .connect(
        `${process.env.MONGO_URI}`
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`);
        });
    })
    .catch((err) => {
        console.log(err);
    });