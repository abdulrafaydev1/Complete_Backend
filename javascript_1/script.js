function getScore(...score) {
    let totle = 0;

    score.forEach(function(value) {
        totle = totle + value
    })

    return totle
}

console.log(getScore(12,12,12,12))