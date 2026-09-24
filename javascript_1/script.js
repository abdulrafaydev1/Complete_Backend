let x = 100;

function outer() {
    let x = 200;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();