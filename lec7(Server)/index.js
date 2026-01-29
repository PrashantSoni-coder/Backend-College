const http = require("http");
const url = require("url");
let server  = http.createServer((request,response)=>{
    
    response.end("Server started sucessfully");
});
server.listen(8008,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at http://localhost:8008");
});
let link = "http://localhost:8008" ;
let parsedUrl = url.parse(link,true);
console.log(parsedUrl);


//next topics-> headers,url,status codes
//next topics-> url ,url.parse