require("dotenv").config()

const app = require("./app")
require("./database")

app.listen(process.env.PORT)

console.log(`Server on port http://localhost:${app.get("port")}/`)