let btn = document.querySelector('#btn')
let fileInput = document.querySelector('#fileInput')

btn.addEventListener('click', function () {
    fileInput.click()
})

fileInput.addEventListener('change', function(e){
    btn.textContent = e.target.files[0].name
    console.log(e)
})