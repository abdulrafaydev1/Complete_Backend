let form = document.querySelector('#todoForm')
let todoInput = document.querySelector('#todoInput')
console.log(todoInput)
let container = document.querySelector('.container')

form.addEventListener('submit', function(dets){
    dets.preventDefault()

    let todoCard = document.createElement('div')
    todoCard.classList.add('todoCard')

    let h3 = document.createElement('h3')
    h3.textContent = todoInput.value
    

    todoCard.appendChild(h3)

    container.appendChild(todoCard)
})