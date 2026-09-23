
let arr = [1, 2, 3, 4, 5]
const newarr = arr.filter(function (acc, val) {
    return acc + val

}, 0)

console.log(newarr);
