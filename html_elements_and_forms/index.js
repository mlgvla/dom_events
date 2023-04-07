
         const radioButtons = document.getElementsByName("radioButtons")
         const checkboxes = document.getElementsByName("checkbox")
         const dropdown = document.getElementsByName("dropdown")[0]

         for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].addEventListener("change", function (e) {
               console.log(e)
               console.log("Event Type: ", e.type)
               console.log("Selected radio button:", e.target.value)
            })
         }

         for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("change", function (e) {
               console.log(e)
               console.log("Event Type: ", e.type)
               console.log(`${e.target.value} is checked:`, e.target.checked)
            })
         }

         // bubbling!
         const checkboxFS = document.querySelector("#checkbox-group")
         checkboxFS.addEventListener("change", (e) => {
            console.log(e)
            console.log("Event Type: ", e.type)
            console.log(`${e.target.value} is checked:`, e.target.checked)
         })

         dropdown.addEventListener("change", function (e) {
            console.log(e)
            console.log("Event Type: ", e.type)
            console.log("Selected option in dropdown:", e.target.value)
         })
