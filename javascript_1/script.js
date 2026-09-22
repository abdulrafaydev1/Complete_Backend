var x = 5;

function demo() {
    var x = 10;

    if (true) {
        var x = 20;
    }

    console.log(x);
}

demo();
console.log(x);