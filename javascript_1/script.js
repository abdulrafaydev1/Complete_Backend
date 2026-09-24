let a = 100;

function outer() {
    let a = 200;

    function middle() {
        // console.log(a); // error

        let a = 300;

        function inner() {
            console.log("is console ma ayega 300", a);
        }

        inner();

        console.log("is console ma ayega 300", a); // 
    }

    middle();

    console.log("is console ma ayega 200", a); // 200
}

outer();
console.log("is console ma ayega 100", a); // 100