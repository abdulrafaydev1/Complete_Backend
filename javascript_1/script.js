function score(...val) {
    let totle = val
    return function(){
        totle = totle + 1;
    }
}

console.log(score(10, 30, 63, 60)())