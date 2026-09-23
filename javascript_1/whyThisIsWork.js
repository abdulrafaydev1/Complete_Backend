function discoundCalculater(discound) {
    return function (price) {
        return price - price * (discound / 100)
    }
}

const dicounter = discoundCalculater(10)
console.log(dicounter(30))