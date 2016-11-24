var readdirandfilter = require('./06module.js');


readdirandfilter( process.argv[2], process.argv[3], function(err, files) {

    if (err) {
        console.log(err);
    } else {
        files.forEach(function(file){
            console.log(file);
        });
    }
    
});