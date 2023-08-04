const http = require("http")
const fs = require("fs")
const todos = require("./data")
const port = 3000


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "application/json"});
    const pathUrl = req.url;
   
    switch(pathUrl){
        case "/todo":
         res.end(JSON.stringify(todos))
         break;
    }
  
})

server.listen(port, console.log(`server is running on port ${port}`))