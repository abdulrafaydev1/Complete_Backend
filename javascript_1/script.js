function abcd(val) {
    val()
    return function () {
        console.log('heyheyheyhey');

    }
}
abcd(function () {
    console.log('rafay');

})()