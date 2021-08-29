require("dotenv").config()

const express = require("express"),
morgan = require("morgan"),
router = require("./routes/employees.routes"),
cors = require("cors"),
app = express(),
corsOptions = {origin: process.env.PETITION};


// settings
app.set("port", process.env.PORT)

// middleweares
app.use(cors(corsOptions))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/api", router)

module.exports = app