var x = 10;

function outer() {
    console.log(x); // error

    let x = 20;

    {
        var x = 30;
        console.log(x);
    }

    console.log(x);
}

outer();

console.log(x); // is console ma ayega 10

 