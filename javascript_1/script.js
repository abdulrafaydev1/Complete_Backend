function getScore(...score) {
    let totle = 0;
    score.forEach(function (val) {
        totle = totle + val 
    })

    return totle
}

let value = getScore(12,12,12,12)
console.log(value)

// function abcd() {
//     let a = 1
//     return function () {
//         console.log(a)
//     }
// }

// console.log(abcd()())