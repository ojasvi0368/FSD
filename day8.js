create your own server using http module

 import http from "http"
 const server=http.createServer((req,res)=>{
     res.writeHead(200,{"content-type":"text/plain"});
    res.write("hello world");
      res.end();
    
 })
 server.listen()
 server.listen(3000),()=>{
     console.log("server is running on port 3000")
}

import http from http;
const server=http.createServer((req,res))