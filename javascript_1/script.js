var a = 10;

function outer() {
    console.log("is console ma ayega undefiend",a); // yar is console ma ayega undefiend

    var a = 20;

    {
        let a = 30;

        console.log("is console ma ayega 30",a); // is console ma ayega 30

        function inner() {
            // console.log(a); // error

            let a = 40;

            console.log('is console ma ayega 40',a); // is console ma ayega 40
        }

        inner();

        console.log("is console ma ayega 30",a);
    }

    console.log("is console ma ayeega 20", a); // is console ma ayega ( 20 )
}

outer();

console.log("is console ma ayeega 10",a); // is console ma ayega ya number ( 10 )


 