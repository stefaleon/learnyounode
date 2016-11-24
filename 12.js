var http = require('http');
var map = require('through2-map');
var PORT = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
	if (req.method != 'POST') {
		return res.end('Receiving POST requests only!\n');
	}
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(PORT, function() {
	console.log('Server started on port', PORT);
});