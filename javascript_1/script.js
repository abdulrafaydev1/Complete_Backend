var x = 100;

function test() {
    console.log(x);

    var x = 200;

    {
        let x = 300;
        console.log(x);
    }

    console.log(x);
}

test();
console.log(x);