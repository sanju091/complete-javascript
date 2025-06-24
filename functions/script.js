//--Functions---->>>>   A function is a block of code designed to perform a specific task.You can use it multiple times without rewriting the same code.


function add(a) {
   return a*a;
}
let callFun=add(5);
console.log(callFun);


//--------------Arrow Function------

let add=(a,b)=>{
   return a+b;
}
let sum=add(2,3);
console.log(sum);



                    //---------forEach function(call back function)



 let arr=[1,2,3,4,5];
 arr.forEach((val)=>{
    return val;
 })
