// Get elements
const click = document.querySelector("#click")
const doubleClick = document.querySelector("#doubleclick")
const mouseDown = document.querySelector("#mousedown")
const mouseUp = document.querySelector("#mouseup")
const clickMDMUOrder = document.querySelector("#click-order")
const mouseEnter = document.querySelector("#mouseenter")
const mouseOver = document.querySelector("#mouseover")
const mouseLeave = document.querySelector("#mouseleave")
const mouseOut = document.querySelector("#mouseout")
const mouseMove = document.querySelector("#mousemove")

// Add event listeners
click.addEventListener("click", (e) => {
   showEvent(e, click, "click")
})

doubleClick.addEventListener("dblclick", (e) => {
   showEvent(e, doubleClick, "dblclick")
})

mouseDown.addEventListener("mousedown", (e) => {
   showEvent(e, mouseDown, "mousedown")
})

mouseUp.addEventListener("mouseup", (e) => {
   showEvent(e, mouseUp, "mouseup")
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

mouseEnter.addEventListener("mouseenter", (e) => {
   showEvent(e, mouseEnter, "mouseenter")
})

mouseOver.addEventListener("mouseover", (e) => {
   showEvent(e, mouseOver, "mouseover")
})

mouseLeave.addEventListener("mouseleave", (e) => {
   showEvent(e, mouseLeave, "mouseleave")
})

mouseOut.addEventListener("mouseout", (e) => {
   showEvent(e, mouseOut, "mouseout")
})

mouseMove.addEventListener("mousemove", (e) => {
   console.log("The mouse is moving!")
})

function showEvent(e, element, eventName)  {
   const p = document.createElement("p")
   p.innerHTML = eventName.toUpperCase() + "!"
   element.appendChild(p)

   console.log(eventName)
   console.log(e)

   setTimeout(() => {
      p.remove()
   }, 1500)
}

