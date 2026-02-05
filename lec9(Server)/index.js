const http = require("http");
const fs = require("fs");
const url = require("url");

let server = http.createServer((req, res) =>  {
    switch(req.url){
        case '/' :fs.readFile('./component/h.html',(err,page)=>{
            if(err){
                console.log(err);
            }else{
                res.write(page);
            }
            res.end();
        })
        break;
        case '/a' :fs.readFile('./component/a.html',(err,page)=>{
            if(err){
                console.log(err);
            }else{
                res.write(page);
            }
            res.end();
        })
        break;
        case '/p' :fs.readFile('./component/p.html',(err,page)=>{
            if(err){
                console.log(err);
            }else{
                res.write(page);
            }
            res.end();
        })
        break;
    }
}).listen(8008, "Localhost", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server started at http://localhost:8008");

})
