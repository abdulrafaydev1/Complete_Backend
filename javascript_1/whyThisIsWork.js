function discoundCalculater(discound) {
    return function (price) {
        return price - price * (discound / 100)
    }
}

const dicounter = discoundCalculater(10)
console.log(dicounter(30))

//!------------------------------------------------------
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