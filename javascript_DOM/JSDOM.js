let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    card.appendChild(profile)
    console.log(card)

})