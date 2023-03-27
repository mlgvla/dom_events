// Get box elements
const redBox = document.querySelector(".box.red")
const greenBox = document.querySelector(".box.green")
const blueBox = document.querySelector(".box.blue")
const yellowBox = document.querySelector(".box.yellow")
const purpleBox = document.querySelector(".box.purple")
const orangeBox = document.querySelector(".box.orange")
const mouseEnterCompare = document.querySelector("#box7")
const mouseOverCompare = document.querySelector("#box8")
const mouseLeaveCompare = document.querySelector("#box9")
const mouseOutCompare = document.querySelector("#box10")
const clickMDMUOrder = document.querySelector("#box11")
const mouseMove = document.querySelector("#box12")

// Add event listeners
redBox.addEventListener("click", () => {
   showEvent(redBox, "click")
})

greenBox.addEventListener("dblclick", () => {
   showEvent(greenBox, "dblclick")
})

blueBox.addEventListener("mousedown", () => {
   showEvent(blueBox, "mousedown")
})

yellowBox.addEventListener("mouseup", () => {
   showEvent(yellowBox, "mouseup")
})

purpleBox.addEventListener("mouseenter", () => {
   showEvent(purpleBox, "mouseenter")
})

orangeBox.addEventListener("mouseleave", () => {
   showEvent(orangeBox, "mouseleave")
})

mouseMove.addEventListener("mousemove", (e) => {
   console.log(e.clientX, e.clientY)
})

mouseEnterCompare.addEventListener("mouseenter", (e) => {
   console.log(e.target)
   showEvent(mouseEnterCompare, "mouseenter")
})

mouseOverCompare.addEventListener("mouseover", (e) => {
   console.log(e.target)
   showEvent(mouseOverCompare, "mouseover")
})

mouseLeaveCompare.addEventListener("mouseleave", (e) => {
   console.log(e.target)
   showEvent(mouseLeaveCompare, "mouseleave")
})

mouseOutCompare.addEventListener("mouseout", (e) => {
   console.log(e.target)
   showEvent(mouseOutCompare, "mouseout")
})

clickMDMUOrder.addEventListener("click", function () {
   console.log("click event")
})

clickMDMUOrder.addEventListener("mouseup", function () {
   console.log("mouseup event")
})

clickMDMUOrder.addEventListener("mousedown", function () {
   console.log("mousedown event")
})

// Show event underneath box

const showEvent = (element, eventName) => {
   const p = document.createElement("p")
   p.innerHTML = eventName.toUpperCase() + "!"
   element.appendChild(p)
   setTimeout(() => {
      p.innerHTML = ""
   }, 1000)
}
