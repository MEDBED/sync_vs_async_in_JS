//here is a simple exemple about an Asynchronous programming
//where there is an instruction that takes a lot of time one of the solutions is to use 
//the setTimeOut Function to do the instructions then comeback for it.
function longRun(callBack) {
    setTimeout(() => {
        var x = 0; 
        while(x < 10000000000){
            x++;
        }
        callBack("All Done !");
    }, 0);    
}

console.log (new Date().getTime());
//so here the next instruction will takes a lot of time
longRun((msg) => {console.log(msg)});
console.log (new Date().getTime());
