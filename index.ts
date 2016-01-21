import http = require('http');



const hostname = '127.0.0.1';
const port:number = 8080;

http.createServer(function(req:http.ServerRequest,res:http.ServerResponse) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello Words\n")
}).listen(port,hostname,function(){
    
     console.log("Server running at http://"+hostname+":"+port);
});

