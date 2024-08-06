// function x(){
//     const x=10;
// }

// x()


// function expression
function fun(){
    console.log("Fun called");
    
}

function gun(){
    console.log("inside the gun");
    fun();
    console.log("Leaving the gun");
}

gun();


// Named function
function add(a,b){
    return a+b;
}

console.log(add(10,20));
 