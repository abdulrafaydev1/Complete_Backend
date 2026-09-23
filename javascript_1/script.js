
let arr =  [ 10, 30, 72, 38, 82, 81, 10, 9 ,8, 16 ]
const newarr = arr.filter(function(val) {
    if(val > 10) return val
 
})

console.log(newarr);
