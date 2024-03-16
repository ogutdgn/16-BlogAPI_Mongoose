"use strict"

//? Express Mongo DB connection MONGOOSE

const MONGODB = process.env.MONGODB
// const MONGODB = "mongodb://localhost:27017/blogAPI"

const mongoose = require("mongoose");

mongoose.connect(MONGODB)
    .then(() => console.log("* DB Connected *"))
    .catch((err) => console.log("* DB Not Connected *", err))