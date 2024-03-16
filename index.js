"use strict"

/*
    BLOG API WITH MONGOOSE
*/

const express = require("express");

const app = express();

app.use(express.json()); //! Yukarılarda kalmasında fayda var

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

require("./src/configs/dbConnection");

app.all("/", (req, res) => {
    res.send("BLOG API PROJECT")
})

app.use('/blog', require("./src/router/blog.router"))
app.use('/user', require("./src/router/user.router"))


app.use(require("./src/middlewares/errorHandler")); //! Aşağıda kalmasında fayda var

app.listen(PORT, () => console.log(`Running server on http://${HOST}:${PORT}`));



// require("./src/sync")()