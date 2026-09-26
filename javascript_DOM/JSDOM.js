let h1 = document.querySelector('h1')

function dblclick() {
    h1.style.color = 'black'
    h1.style.backgroundColor = 'white'
}

h1.addEventListener('dblclick', dblclick)
h1.removeEventListener('dblclick', dblclick)
