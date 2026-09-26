let input = document.querySelector('input')
let h1 = document.querySelector('h1')
let span = document.querySelector('span')

input.addEventListener('input', function(dets) {
    
    span.textContent = dets.target.value
    
})