var x = 100;

function test() {
    console.log(x, "this is");

    var x = 200;

    {
        let x = 300;
        console.log(x);
    }

    console.log(x);
}

console.log(x);
test();