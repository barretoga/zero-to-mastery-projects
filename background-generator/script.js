const css = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const random = document.querySelector("#btn-random")
const body = document.getElementById("gradient")

// Event Listener
color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
random.addEventListener('click', setRandomGradient)


// Functions
function setGradient() {
    body.style.background = 
    'linear-gradient(to right, ' 
    + color1.value
    + ',' 
    + color2.value 
    + ")"

    css.textContent = body.style.background + ";"
}

function setRandomGradient() {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16)
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16)

    document.body.style.background = 'linear-gradient(to right, '
    + "#" 
    + randomColor1
    + ','
    + "#" 
    + randomColor2
    + ')'

    css.textContent = body.style.background + ";"
}