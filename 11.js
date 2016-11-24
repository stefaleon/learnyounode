var http = require('http');
var fs = require('fs');
var PORT = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
    var readStream = fs.createReadStream(process.argv[3]);
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    readStream.pipe(res);
});

server.listen(PORT, function() {
    console.log('Server started on port', PORT);
});