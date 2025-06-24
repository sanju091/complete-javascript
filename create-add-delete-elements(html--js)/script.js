//-----create element and add element-----------
let newBtn=document.createElement("button");
newBtn.innerText="click me!!";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);



//--------DELETE ELEMENT
 
let para=document.querySelector("p");
para.remove();
