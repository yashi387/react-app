const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")

var bodyParser = require('body-parser');
const cors=require('cors')
mongoose
    .connect("mongodb://localhost:27017/todo",
        { useNewUrlParser: true })
    .then(() => {

        
        const app = express()
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use("/", routes)
        app.listen(4000, () => {
            console.log("Server has started!")
        })
    })