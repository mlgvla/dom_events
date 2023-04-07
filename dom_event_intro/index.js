const btn = document.querySelector("button") // get element by type
const div = document.querySelector("div") 


btn.addEventListener("click", changeBackground)

function changeBackground(e) {
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})` // generate a random color

   div.style.backgroundColor = rndCol // change the background color of the div
}

function random(number) {
   return Math.floor(Math.random() * (number + 1)) // generate a random number from 0 to 255
}





// Keydown demo - move this to keyboard events

const textBox = document.querySelector("#text-box")
const output = document.querySelector("#output")

textBox.addEventListener("keydown", (e) => {
   console.log(e)
   output.textContent = `You pressed the "${e.key} key".`
})

// Focus/blur demo

textBox.addEventListener("focus", (e) => {
   console.log(e)
   e.target.style.backgroundColor = "blue"
   e.target.style.color = "white"
})

textBox.addEventListener("blur", (e) => {
   console.log(e)
   e.target.style.backgroundColor = ""
   e.target.style.color = ""
})

// also show this with the btn - open console.