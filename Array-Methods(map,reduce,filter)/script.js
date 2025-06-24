/*------map Array method--------Applies a function to each element

Returns a new array with transformed values*/
 
const arr=[1,2,3,4,5];
const newArr=arr.map((x)=>{
return x*2;
}
)
console.log(newArr);


/*filter method--------- Applies a condition

Returns a new array with only the elements that match the condition (i.e., callback returns true) */
 
 let arr2=["sanju","aajad","abhi"];
 let currentValue=arr2.filter((val)=>{
    return val;
 })
 console.log(currentValue.toString());



 const studentMarks=[70,90,92,45,99,97.95,77,64,85];
const updateMarks=studentMarks.filter((marks)=>{
return marks>=90;
})
console.log(updateMarks);



/* ------reduce method------ Uses an accumulator to build a single result---

Can return any type: number, array, object, string, etc.  */

let arr3=["sanju","abhi"];
let reduceArr=arr3.reduce((accumulator, currentValue)=>
{
  return (accumulator.length+currentValue.length);
})
console.log(reduceArr)




//-----prompt using reduce method
const inputNumber =prompt("enter n numbers!!");

const numbers=inputNumber.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
})
console.log(inputNumber);
