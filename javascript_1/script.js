var a = 10;

function test() {
    var a = 20;

    if (true) {
        var a = 30;
        console.log(a);
    }

    console.log(a);
}

test();
console.log(a);