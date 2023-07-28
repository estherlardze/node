// const myFunction = () =>{
//     console.log("Function was called")
// }

// var NewString = "string";

// module.exports.NewString = NewString;
// module.exports.myFunction = myFunction;

var url = require('url')
var fs = require('fs')
var http  = require("http")

const htmlRequest = (path, response) =>{
    fs.readFile(path, function(err, data){
     if(err){
        response.writeHead(404)
        response.write("Page not found")
     }else{
        response.write(data)
     }
     response.end();
    })
}

   
http.createServer((request, response) => {
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    const path = url.parse(request.url, true).pathname

    switch (path){
        case '/':
            htmlRequest('./index.html', response)
             break;
        case './login':
            htmlRequest('./login.html', response)
             break;
        default:
            response.writeHead(404)
            response.write('invalid url')
            response.end();
    }
}) 
    
    

   
   


http.createServer(htmlRequest).listen(3000)