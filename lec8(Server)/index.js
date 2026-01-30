const http = require("http");
const url = require("url");
const fs = require("fs");


let server  = http.createServer((req,res)=>{
    const da = new Date();
    fs.appendFile("serverlog.txt",`${da},${req.url} new request rewined.\n`,(err)=>{
        if(err){
            console.log(err);
        }
    });
    res.write('<h1 style="color:red">Server Created Sucessfully</h1>');
    res.end();
})
server.listen(8008,"Localhost",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at http://localhost:8008");

})

let myUrl = "http://localhost:8008";
let parsed = url.parse(myUrl,true);
console.log(parsed.hostname);
