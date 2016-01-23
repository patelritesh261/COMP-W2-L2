var http = require('http');
var port = pro.env.PORT || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello Words\n");
}).listen(port);
//# sourceMappingURL=index.js.map