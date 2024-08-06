// function x(){
//     const x=10;
// }

// x()


// function expression
// function fun() {
//     console.log("Fun called");

// }

// function gun() {
//     console.log("inside the gun");
//     fun();
//     console.log("Leaving the gun");
// }

// gun();


// // Anynomus functions
// const sum1 = function (a, b) {
//     return a + b;
// }
// console.log(sum1(10, 20));

// // Named function
// const sum2 = function add(a, b) {
//     return a + b;
// }

// console.log(sum2(10, 20));


//Set Time out
// setTimeout(function fun() {
//     console.log("Fun called");
// },2000)

function todo(fun){
    setTimeout(function gun(){
        console.log("Fun called",fun);
        
    },2000)
}

console.log("Starting todo");
todo();
console.log("Finished todo");


