function abcd(val) {
    val()
}

abcd(function () {
    console.log(123)
})
