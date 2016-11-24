var http = require('http');
var url = require('url');
var PORT = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
	
	res.on('error', function(err) {
      console.error(err);
    });
	
	if (req.method !== 'GET') {
		res.end('Receiving GET requests only!\n');
	}
	
	var urlObj = url.parse(req.url, true);
	var time = new Date(urlObj.query.iso)
	// console.log(urlObj);
	
	function parsetime (time) {
		return {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
			}
	}
	
	function unixtime (time) {
		return { unixtime: time.getTime() }
	}
	
	res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
	
	if(urlObj.pathname==='/api/parsetime') {
		res.end(JSON.stringify(parsetime(time)));
	}
	
	if(urlObj.pathname==='/api/unixtime') {
		res.end(JSON.stringify(unixtime(time)));
	}
	
});

server.listen(PORT, function() {
	console.log('Server started on port', PORT);
});