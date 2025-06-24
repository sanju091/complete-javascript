//------>>>>>Hoisting<<<<<-----Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope before the code is executed

console.log(a);
add();
function add() {
 console.log("hello..!");
 return 2+5;
}

var a=10;
console.log(a);


//   let a=10;                
//   console.log(a);

/*sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello!");
};




var sayHello;
sayHello(); // still undefined at this point
sayHello = function() {
  console.log("Hello!");
};
*/
