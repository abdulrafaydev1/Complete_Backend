var x = 1;

function level1() {
    console.log(x);

    let x = 2;

    function level2() {
        console.log(x);

        var x = 3;

        {
            let x = 4;

            console.log(x);

            function level3() {
                console.log(x);

                let x = 5;

                console.log(x);
            }

            level3();

            console.log(x);
        }

        console.log(x);
    }

    level2();

    console.log(x);
}

level1();
console.log(x);