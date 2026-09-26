let sel = document.querySelector('select')
let h1 = document.querySelector('h1')

sel.addEventListener('change', function(dets){
    console.log(dets.target.value);
    
})