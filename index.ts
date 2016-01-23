import http = require('http');




const port:number = pro.env.PORT || 8080;

http.createServer(function(req:http.ServerRequest,res:http.ServerResponse) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello Words\n")
}).listen(port);

