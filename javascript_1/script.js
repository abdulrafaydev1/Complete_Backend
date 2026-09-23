var x = 100;

function outer() {
    var x = 200;

    function inner() {
        var x = 300;
        console.log(x);
    }

    inner();
    console.log(x);
}

outer();
console.log(x);