const express = require("express")
const app = express()
const birds = require("./birds")
const port = 3000


const server = app.use("./birds", birds)

server.listen(`server is running on port ${port}`)