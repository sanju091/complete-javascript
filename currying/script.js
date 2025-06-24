/*----->>>>currying<<<<----A function that takes multiple arguments is transformed into a sequence of functions.

Each function takes one argument and returns another function until all arguments are provided.*/




//example 1

function add(a) {

    return function (b) {
       return (a + b);
    }
 }
 let c = add(2)(3);
 console.log(c);
 
 //exaple 2
 
 const add5 = add(5);
 let a=add5(10);
 console.log(a);
 
 
 //example 3
 
 const multiply =a => b => a*b;
 
 const double = multiply(2);
 const triple = multiply(10);
 
 let d=double(2);
 let e=triple(2);
 console.log(d,e);
