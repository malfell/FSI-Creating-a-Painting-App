// Click on palette
// Get selectedColor

//let selectedColor = 'blue'

let currentColor = 'pink'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e) {
    e.target.style.backgroundColor = currentColor
})

let palette = document.querySelector('.palette')
palette.addEventListener('click', function(e){
    currentColor = e.target.id
})

painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

let button = document.querySelector('.clear-button')
button.addEventListener('click', function(){
    let pixels = document.querySelectorAll('.pixel')

    for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
    }
})