//--->>>>>closure<<<----A closure is a function inside another function that can access the outer function’s variables even after the outer function has returned..

function init() {
    var name = 'krishna';

    function displayName() {
      console.log(name);
    }
    name = 'sanju';
    return displayName();

}

let c = init();
