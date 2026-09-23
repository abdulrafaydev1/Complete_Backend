function number(...val) {
    let totle = 0;
    val.forEach(function(fullVal){
        totle = totle + fullVal
    })

    console.log(totle);
    
}

console.log(number(1,2,3,4,5,6,7,8,9,10))   