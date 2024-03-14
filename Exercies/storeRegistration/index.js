const input = document.querySelectorAll('form input')


function changeColor (e) {
   e.target.style.border = '4px solid aqua'
}
function resetColor (e) {
    e.target.style.border = '1px solid black'
 }
 

input.forEach( element => {
    element.addEventListener('blur', resetColor)
})
input.forEach( element => {
    element.addEventListener('focus',changeColor)
})

