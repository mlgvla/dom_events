const g3 = new Audio("./audio/g3-04.wav")
const a3 = new Audio("./audio/a3-03.wav")
const b3 = new Audio("./audio/b3-03.wav")
const c4 = new Audio("./audio/c4-03.wav")
const d4 = new Audio("./audio/d4-04.wav")
const e4 = new Audio("./audio/e4-04.wav")
const textBox = document.querySelector("#text-box")
const output = document.querySelector("#output")
const playPianoBtn = document.querySelector("#play-piano")

// Keydown demo

textBox.addEventListener("keydown", (e) => {
   console.log(e)
   output.textContent = `You pressed "${e.key}".`
})

// Piano demo - using key event properties

playPianoBtn.addEventListener("click", (e) => {
   document.addEventListener("keydown", toyPianoPlay)
})

function toyPianoPlay(e) {
   if (e.keyCode === 74) {
      // the "j" key
      g3.currentTime = 0
      g3.play()
   }
   if (e.keyCode === 75) {
      // the "k" key
      a3.currentTime = 0
      a3.play()
   }
   if (e.keyCode === 76) {
      // the "l" key
      b3.currentTime = 0
      b3.play()
   }
   if (e.keyCode === 186) {
      // hook this up to the ; key!
      c4.currentTime = 0
      c4.play()
   }

   if (e.keyCode === 222) {
      // hook this up to the ' key!
      d4.currentTime = 0
      d4.play()
   }
}

// Focus/blur demo

textBox.addEventListener("focus", (e) => {
   // console.log(e)
   document.removeEventListener("keydown", toyPianoPlay)
   // e.target.style.backgroundColor = "blue"
   // e.target.style.color = "white"
})

textBox.addEventListener("blur", (e) => {
   // console.log(e)
   e.target.style.backgroundColor = ""
   e.target.style.color = ""
   e.target.value = ""
   output.textContent = ""
})
