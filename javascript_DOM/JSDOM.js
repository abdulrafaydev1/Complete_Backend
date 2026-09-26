let sel = document.querySelector('select')
let h1 = document.querySelector('h1')

sel.addEventListener('change', function(dets){
    // h1.textContent = 'device selected'
    h1.textContent = `device selected: ${dets.target.value}`
    let a = dets.target.value
    a.className = 'rafay'
    console.log(dets.target.value);
})