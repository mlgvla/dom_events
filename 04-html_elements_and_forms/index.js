const radioButtons = document.getElementsByName("radioButtons")
const checkboxes = document.getElementsByName("checkbox")
const dropdown = document.getElementById("dropdown")

radioButtons.forEach((radioButton) => {
   radioButton.addEventListener("change", function (e) {
      console.log(e)
      console.log("Event Type: ", e.type)
      console.log("Selected radio button:", e.target.value)
   })
})

checkboxes.forEach((checkbox) => {
   checkbox.addEventListener("change", function (e) {
      console.log(e)
      console.log("Event Type: ", e.type)
      console.log(`${e.target.value} is checked:`, e.target.checked)
   })
})

// bubbling!
// const checkboxFS = document.querySelector("#checkbox_group")

// checkboxFS.addEventListener("change", (e) => {
//    console.log("Current Target: ", e.currentTarget)
//    console.log(e)
//    console.log("Event Type: ", e.type)
//    console.log(`${e.target.value} is checked:`, e.target.checked)
// })

dropdown.addEventListener("change", function (e) {
   console.log(e.currentTarget)
   console.log(e)
   console.log("Event Type: ", e.type)
   console.log("Selected option in dropdown:", e.target.value)
})
