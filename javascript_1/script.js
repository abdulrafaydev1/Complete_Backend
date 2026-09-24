var x = 10;

{
    let x = 20;

    {
        var x = 30;
        console.log(x);
    }

    console.log(x);
}

console.log(x);