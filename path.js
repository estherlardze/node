const path = require("path")
const fs = require("fs")

const readDir = path.join(__dirname, "practice")


fs.readdir(readDir, function(err, files){
    if(err){
        console.log("Unable to scan documents", err)
    }
    files.forEach(file => (
      console.log(file)  
    ))
})
