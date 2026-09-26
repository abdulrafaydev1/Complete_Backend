let input = document.querySelector('input')
let h1 = document.querySelector('h1')
let span = document.querySelector('span')

input.addEventListener('input', function (dets) {
    let CharactersLeft = 20 - input.value.length
    span.textContent = CharactersLeft

    if (CharactersLeft < 0) {
        span.style.color = 'red'
    } else {
        span.style.color = 'white'
    }
})