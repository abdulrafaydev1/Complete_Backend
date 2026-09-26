let btn = document.querySelector('#btn')
let fileInput = document.querySelector('#fileInput')

btn.addEventListener("click", function () {
    fileInput.click()
})

fileInput.addEventListener('change', function (dets) {
    btn.textContent = dets.target.files[0].name
    console.log(dets.target.files[0].name)
})