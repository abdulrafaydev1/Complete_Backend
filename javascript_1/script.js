function getScore(...score) {
    let totle = 0;
    score.forEach(function(val) {
        totle = totle + val
    })

    return totle
}

console.log(getScore(12,12,12,12))