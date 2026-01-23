const http = require("http");
let server  = http.createServer((request,response)=>{
    console.log(request);
    response.end("Server started sucessfully");
});
server.listen(8008,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at http://localhost:8008");
});

//next topics-> headers,url,status codes