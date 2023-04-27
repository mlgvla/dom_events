const btn = document.querySelector("#color-change") // get element by id
const div = document.querySelector(".button-demo") // get element by class

btn.addEventListener("click", () => {
   // generate a random color using a helper function random(number)
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`

   // change the background color of the div
   div.style.backgroundColor = rndCol
})

// btn.removeEventListener("click", changeBackground)

// "helper" function
function random(number) {
   // generate a random number from 0 to 255
   return Math.floor(Math.random() * (number + 1))
}
