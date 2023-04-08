const btn = document.querySelector("button") // get element by type
const div = document.querySelector("div") 


btn.addEventListener("click", () => {
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})` // generate a random color

   div.style.backgroundColor = rndCol // change the background color of the div
}
)

function random(number) {
   return Math.floor(Math.random() * (number + 1)) // generate a random number from 0 to 255
}





