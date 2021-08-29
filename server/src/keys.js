require("dotenv").config()
const { HOST, DATABASE } = process.env

const URI = `mongodb://${HOST}/${DATABASE}`

module.exports = URI
