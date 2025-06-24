/*      ------>>>>>async and awiat<<<<------ They make asynchronous code look like synchronous code.

Easier to read and write than .then() chains. */


/*----async  ----- When you mark a function with async, it always returns a promise — even if you return a value directly.   */
/*--await--- You use await inside an async function to pause execution until a Promise resolves.    */



function getData(dataId){
return new Promise((resolve,reject) => {
setTimeout(()=>{
   console.log(dataId);
   resolve("success");
 } ,3000);
});
}

getData(1);
async function getAllData(){
console.log("getting data2....");
await getData(2);
console.log("getting data3 ....");
await getData(3);
console.log("getting data4...")
await getData(4);
console.log("getting data5....")
await getData(5);
} 
 
