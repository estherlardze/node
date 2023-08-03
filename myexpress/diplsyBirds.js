const express = require("express")
const app = express()


const appname = function(req, res, next){
    console.log("Recieved request at:", new Date())
    next()
}

app.use(appname)

app.get("/", function(req, res){
   res.send("Hello from next app")
}).listen(3000, console.log("Server is running on port 3000"))