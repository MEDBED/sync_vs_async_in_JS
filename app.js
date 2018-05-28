//here is a simple exemple about the synchronous programming problems
//where there is an instruction that takes a lot of time!
function longRun() {
    var x = 0; 
    while(x < 10000000000){
        x++;
    }
    console.log('Done !');    
}

console.log (new Date().getTime());
//so here the next instruction will takes a lot of time
longRun();
console.log (new Date().getTime());
