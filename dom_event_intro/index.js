const btn = document.querySelector("button") // get the element you want to attach the event to
const div = document.querySelector("div") // get any elements you want to do something to 

btn.addEventListener("click", () => {  // add the eventlistner to the element
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})` // generate a random color

   div.style.backgroundColor = rndCol  // change the background color of the div
})

function random(number) {
   return Math.floor(Math.random() * (number + 1)) // generate a random number from 0 to 255
}
