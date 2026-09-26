let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    inputs.forEach(function(){
        console.log(dets.submitter.value)
    })
   
})