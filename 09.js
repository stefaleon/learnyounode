var http = require('http');

var output = [];
output[0] ='';
output[1] ='';
output[2] ='';
var completed = 0;

function getFromArgvi(i){   
    http.get(process.argv[2+i], function(res){
        res.setEncoding('utf-8');
        res.on('error', console.error);
        res.on('data', function(data){
            output[i] += data;
        });
        res.on('end', function(){
            completed += 1;
            if (completed === 3){
            logOutput();
            }
        });
        
        
    }).on('error', console.error);
}

function logOutput(){
    for(var i=0; i<3; i++){
        console.log(output[i]);
    }
}

for(var i=0; i<3; i++){
    (getFromArgvi(i));
}


