let h1 = document.querySelector('h1')
h1.remove()
let h2 = document.createElement('h2')
h2.textContent = 'sahi cha raha hai'
document.querySelector('body').prepend(h2)