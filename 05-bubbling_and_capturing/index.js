const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// Bubbling Example

document.addEventListener("click", (e) => {
  console.log("Document Bubble")
} )

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent Bubble Up")
} )

parent.addEventListener("click", (e) => {
  console.log("Parent Bubble Up")
})

child.addEventListener("click", (e) => {
  console.log("Child Bubble Up")
})

// Capture Example

document.addEventListener("click", (e) => {
  console.log("Document Capture Down")
}, true)

grandparent.addEventListener("click", (e) => { 
  console.log("Grandparent Capture Down")
}, true )

parent.addEventListener("click", (e) => {
  console.log("Parent Capture Down")
}, true)

child.addEventListener("click", (e) => {
  console.log("Child Capture")
}, true)

