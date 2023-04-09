const btn = document.querySelector("#color_change") // get element by type
const div = document.querySelector(".button-demo")

btn.addEventListener("click", () => {
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})` // generate a random color
   div.style.backgroundColor = rndCol // change the background color of the div
})

// btn.removeEventListener("click", changeBackground)

function random(number) {
   return Math.floor(Math.random() * (number + 1)) // generate a random number from 0 to 255
}
