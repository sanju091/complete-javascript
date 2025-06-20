let name=['amit','annu','divya','anuj'];
let name2=["kajal","vikas","aakash"]

                                                        //----------Arrar methods------------
console.log(name.length);                      //length find

console.log(name.concat(name2));                     //merge two diff. array

console.log(name2.at(2));                            //charat find

console.log(name.push("sanju"));                     //add the end
console.log(name);

console.log(name.pop());                            //Remove from the end
console.log(name);

console.log(name.shift());                         //Remove from the start
console.log(name);

console.log(name.unshift("raj"));                     //add to the start
console.log(name);

console.log(name.slice(2));                            //copy part of any array
console.log(name);

console.log(name.splice(1,2,"sanju"));                 //(find , delete ,add)Add/remove elements at specific index
console.log(name);

console.log(name.toString());                                  //array convert  to string 


console.log(name.reverse());                                //convert to reverse      
