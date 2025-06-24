//------------EVENTS
let newBtn=document.createElement("button");
newBtn.innerText="click me!!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
let body=document.querySelector("body");
console.log(body);
body.append(newBtn);

let btn=document.querySelector("button");



// ------event obj.
btn.onclick=(e)=>{
console.log("btn is clicked");
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(e.clientX,e.clientY);
}


//event listeners



btn.addEventListener("click",(evt)=>{
console.log("button1 was clicked----handler1");
console.log(evt.type);
console.log(evt.target);
})           



btn.addEventListener("click",(evt)=>{
console.log("button2 was clicked--handler2");
console.log(evt.type);
console.log(evt.target);
})


const handler3=(evt)=>{
console.log("button3 is clicked---handler3");
console.log(evt.type);
console.log(evt.target);
};

btn.addEventListener("click",handler3);
//remove event listners


btn.removeEventListener("click",handler3);





//question


let modeBtn=document.querySelector("button");

let currentMode= "light";

modeBtn.addEventListener("click",()=>{
if(currentMode==="light")
{
currentMode="dark";
document.querySelector("body").style.backgroundColor="black";
}
else{
currentMode="light";
document.querySelector("body").style.backgroundColor="white";
}
console.log(currentMode);
})
