var http = require('http');

http.get(process.argv[2], function(res){
    
    res.setEncoding('utf8');
    res.on('error', console.error);
    var wholedata = '';
    res.on('data', function(data){
        wholedata += data;
    });
    
    res.on('end', function(){
        console.log(wholedata.length);
        console.log(wholedata);
    });

}).on('error', console.error);

