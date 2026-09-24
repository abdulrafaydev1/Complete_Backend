var x = 1;

function test() {
    console.log(x);

    if (true) {
        var x = 3;

        {
            let x = 3;
            console.log('this is let', x);
        }

        console.log('this is if', x);
    }

    console.log("this", x);
}

test();
console.log(x);