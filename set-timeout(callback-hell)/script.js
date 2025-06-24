//.........----->>>>.setTimeout
setTimeout(()=>{
console.log("hello!!");
},4000);


//-------->>>>>> callBack---->>>>A callback is a function that is passed as an argument to another function and is executed later





      function sum(a,b){
         console.log(a+b);}

      function calculator(a,b,sumCallBack){
         sumCallBack(a,b);
      }

      calculator(1,2,sum);


//----callBack Hell------>>>

function getData(dataId,getNewData){
setTimeout(()=>{
console.log(dataId);
if(getNewData){
   getNewData();
 
}
},3000);
}

getData(1,()=>{
console.log("getting data2...");
getData(2,()=>{console.log("fecthing data3...")
getData(3);
});
});
