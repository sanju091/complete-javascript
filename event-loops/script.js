//----->>>>>event Loop ----<<<<

/*    call satck---->>>>web api
        <<<--callback queue   */


let btn =document.getElementById('button');

btn.addEventListener('click',function onclick(){
   setTimeout(function timer(){
      console.log("you are clicked the button!!");
   },2000);
});

console.log("hii..!");

setTimeout(function timeOut(){
      console.log("clicked the button..!!");
},5000);


console.log("welcome guy,s");
