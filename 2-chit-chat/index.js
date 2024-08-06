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