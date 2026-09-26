let form = document.querySelector('#todoForm')
let todoInput = document.querySelector('#todoInput')
let container = document.querySelector('.container')
let priority = document.querySelector('#priority')
console.log(priority)

form.addEventListener('submit', function(dets){
    dets.preventDefault()

    let todoCard = document.createElement('div')
    todoCard.classList.add('todoCard')

    let h3 = document.createElement('h3')
    h3.textContent = todoInput.value

    let span = document.createElement('span')
    span.classList.add('select')
    span.textContent = priority.value
    
    h3.appendChild(span)
    todoCard.appendChild(h3)

    container.appendChild(todoCard)

    console.log(todoCard)
})