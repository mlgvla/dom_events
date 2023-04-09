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
click.addEventListener("click", showEvent)

doubleClick.addEventListener("dblclick", showEvent)

mouseDown.addEventListener("mousedown", showEvent)

mouseUp.addEventListener("mouseup", showEvent)

clickMDMUOrder.addEventListener("click", function () {
   console.log("click event")
})

clickMDMUOrder.addEventListener("mouseup", function () {
   console.log("mouseup event")
})

clickMDMUOrder.addEventListener("mousedown", function () {
   console.log("mousedown event")
})

mouseEnter.addEventListener("mouseenter", showEvent)

mouseOver.addEventListener("mouseover", showEvent)

mouseLeave.addEventListener("mouseleave", showEvent)

mouseOut.addEventListener("mouseout", showEvent)

mouseMove.addEventListener("mousemove", (e) => {
   console.log("The mouse is moving!")
})

function showEvent(e) {
   console.log(e.type)
   console.log(e)
}

