var http = require ('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'ContentType':'text/plain'});
    res.end('Berhasil Connect');
}).listen(8080);