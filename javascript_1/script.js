let x = 10;

function outer() {
    console.log(x);

    let x = 20;

    function inner() {
        console.log(x);

        let x = 30;

        console.log(x);
    }

    inner();

    console.log(x);
}

outer();

console.log(x); // 

 