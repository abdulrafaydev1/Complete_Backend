var x = 100;

function test() {
    // console.log(x, "this is");

    var x = 200;

    {
        let x = 300;
        console.log(x);

        {
            let y = 400;
            console.log(y);

            {
                let b = 500;
                console.log(b)

                {
                    let ab = 600;
                    console.log(ab)
                }
            }
        }
    } 

    console.log(x);
}

test();
console.log(x);