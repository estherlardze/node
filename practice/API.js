  const fs = require("fs")
  // How to read a file

  console.log("first")
   fs.readFile("./new.js", (err, data) => {
     if(err){
      console.error(err)
     }  else{
      console.log(data)
     }
    })
   console.log('Third')


  //To append a file 
 fs.appendFile('index.html', "Hello", (err) => {
  if (err){
         console.error(`Error opening file: ${err}`)
       }else{
         console.log("saved")
       }
 })

fs.unlink('new.txt', function(err){
  if(err){
    console.error(err)
  console.log('file deleted succesfully')
  }
})


const urlPath = 'https://www.example.com:8080/path?param1=value1&param2=value2'
const newUrl = url.parse(urlPath, true)
console.log(newUrl.host)
console.log(newUrl.port)
console.log(newUrl.hostname)
console.log(newUrl.query)