//>>>lexical scope<<< ---it means that a function can access variables from its outer environment (scope) at the time the function is defined, not when it’s executed.




function outerFunction() {
    var outerVar = "outer";
    function innnerFunction(){
      console.log(outerVar);
    }
   innnerFunction();
}
outerFunction();
