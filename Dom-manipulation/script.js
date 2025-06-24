//-------------access the data -----------
 
let element=document.getElementById("myId");                                //byID
console.log(element);

let myClass=document.getElementsByClassName("myClass");                     //byCassName
console.log(myClass);
 

console.log(document.getElementsByTagName("p"));                            //byTagName

let para=document.querySelector("p");
console.log(para.getAttribute("clasas"))



//  add new class and remove class

let para2=document.querySelector("p");
console.log(para2);
let newClass=para2.classList.add("newClass");                    //para.classList.add("newClass");
console.log(newClass);
