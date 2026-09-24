var x = 1;

function level1() {
    // console.log(x); //* is console per ayega error

    let x = 2;

    function level2() {
        console.log("is console ma ayegaa undifiend", x); //* is console ma ayegaa undifiend

        var x = 3;

        {
            let x = 4;

            console.log(x);

            function level3() {
                // console.log(x); // error

                let x = 5;

                console.log("is console ma ayega 5", x); //* is console ma ayega 5
            }

            level3();

            console.log("is console ma ayega 4", x); //* is console ma ayega 4
        }

        console.log("is console ma ayega 3",x); //* is console ma ayega 3
    }

    level2();

    console.log("is console ma ayega ( 2 )", x); //* is console ma ayega ( 2 )
}

level1();
console.log("is console ma ayega ( 1 ) ", x); //* is console ma ayegaa 1