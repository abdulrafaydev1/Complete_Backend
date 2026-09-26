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

    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.textContent = 'Delete ToDo'
    
    h3.appendChild(span)
    todoCard.appendChild(h3)
    todoCard.appendChild(btn)

    container.appendChild(todoCard)

    console.log(todoCard)
})