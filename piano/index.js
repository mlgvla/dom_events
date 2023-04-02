const g3 = new Audio("./audio/g3-04.wav")
const a3 = new Audio("./audio/a3-03.wav")
const b3 = new Audio("./audio/b3-03.wav")
const c4 = new Audio("./audio/c4-03.wav")
const d4 = new Audio("./audio/d4-04.wav")
const e4 = new Audio("./audio/e4-04.wav")
// get an f4 and a g4
const keyCodeBtn = document.querySelector("#key-code")
const playPianoBtn = document.querySelector("#play-piano")

keyCodeBtn.addEventListener("click", (e) => {
   document.removeEventListener("keydown", toyPianoPlay)
   document.addEventListener("keydown", showKeydownEvent)
})

playPianoBtn.addEventListener("click", (e) => {
   document.removeEventListener("keydown", showKeydownEvent)
   document.addEventListener("keydown", toyPianoPlay)
})

function showKeydownEvent(e) {
   console.log(e)
}

function toyPianoPlay(e) {
   if (e.keyCode === 74) {
      g3.currentTime = 0
      g3.play()
   }
   if (e.keyCode === 75) {
      a3.currentTime = 0
      a3.play()
   }
   if (e.keyCode === 76) {
      b3.currentTime = 0
      b3.play()
   }
   if (e.keyCode === 186) {   // hook this up to the ; key!
      c4.currentTime = 0
      c4.play()
   }

   if (e.keyCode === 222) {   // hook this up to the ' key!
      d4.currentTime = 0
      d4.play()
   }
}
