//here is a simple exemple about an Asynchronous programming
//where there is an instruction that takes a lot of time one of the solutions is to use 
//the setTimeOut Function to do the instructions then comeback for it.
function longRun(callBack) {
    setTimeout(() => {
        var x = 0; 
        while(x < 10000000000){
            x++;
        }
        callBack("All Done First Exemple !");
    }, 0);    
}

console.log (new Date().getTime());
//so here the next instruction will be skip it and we will comeback for it
//After that we run the next instruction
longRun((msg) => {console.log(msg)});
console.log (new Date().getTime());

//---------- setTimeout ------------------
let y = 100;
//Async instruction
setTimeout(() => {
    y++;
    console.log('All Done second example !');
}, 0);
// simple log
console.log(y);
//Async instruction
setTimeout(() => {
    console.log(y);
    console.log('All Done second example !');
});

//------------Promises--------------------
let promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("yo !");
    },0);
});
console.log(promise);
//this one will wait 10 ms for the promise then wil execute the console
//and this can not be a good solution because you don't know when you will receive the promise.
setTimeout(() => {
    console.log(promise);
},10);
//in order to wait for the data and then execute the promise
promise.then((val) => {
    console.log(val);
})
