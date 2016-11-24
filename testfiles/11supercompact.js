// super compact version test

require('http').createServer(function(req, res){
    require('fs').createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);

