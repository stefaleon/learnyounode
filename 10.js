var net = require('net');

var PORT = Number(process.argv[2]);


// returns a twodigit string
var fix = function(num) {
	return (num < 10 ? '0' + num.toString() : num.toString());
}

// current date & 24 hour time format: "YYYY-MM-DD hh:mm"
// getMonth() returns from [0, 1, ..., 11] so 1 has to be added
function now() {
	var date = new Date()
	return (date.getFullYear() + '-' + fix(date.getMonth() + 1) +
		'-' + fix(date.getDate()) + ' ' + fix(date.getHours()) +
		':' + fix(date.getMinutes()));
}

var server = net.createServer(function(socket) {
	socket.end(now() + '\n');
});

server.listen(PORT);