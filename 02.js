var args = process.argv;
var sum = 0;

for (var i=2, len=args.length; i<len; i++){
    if (isNaN(args[i])){
        console.log('arguments provided should be numbers!'); 
        return;
    }
    sum += Number(args[i]);
}
console.log(sum);