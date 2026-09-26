let input = document.querySelector('input')
input.addEventListener('input', function (e) {
    console.log('you typed', e.target.text);
})