const container = document.querySelector("#container")

container.addEventListener("click", (e) => {
   //  console.log("Element with event handler: ", e.currentTarget)
   //  console.log("Element that was clicked: ", e.target)
    e.target.style.backgroundColor = changeBackground()
  
})
function changeBackground() {
   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
   return rndCol
}
function random(number) {
   return Math.floor(Math.random() * number)
}
