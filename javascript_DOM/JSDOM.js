let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg')

    let h3 = document.createElement('h3')
    h3.textContent = 'Abdul Rafay'

    let h5 = document.createElement('h5')
    h5.textContent = 'Creative Coder'

    let p = document.createElement('p')
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit   Provident natus beatae tempora iure, dignissimos eius numquam fuga'

    profile.appendChild(img)
    card.appendChild(profile)

    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)

    console.log(card);
    

})