const buttons = document.querySelectorAll(".numbuttons");
const startButton = document.querySelector(".startbutton");
const roundUpdateInfo = document.querySelector(".title");
const body=document.querySelector("body")
let round=0
let game=false
let patterns=[]
let buttonId=[]
let allButtonId=[1,2,3,4,5,6,7,8,9]
let randomNumber=(Math.random() * 8 + 1).toFixed(0)

startButton.addEventListener("click",()=>{
 gameStart()
})
const mainGame=()=>{
  buttons.forEach((button)=>{
    button.addEventListener("click",function(){

    })
  })
}
 
const gameStart=()=>{
  round++
  startButton.disabled=true
  return game=true
}
const buttonBlink=()=>{
  loop()
  setTimeout(()=>{
    if (loopNumber==randomNumber) {
       button
    }
  },300)
}
 
const gameOver=()=>{
  startButton.disabled=false
  patterns=[]
  buttonId=[]
  return game=false
}

function loop(){
  for (let loopNumber = 0; loopNumber <=9; i++) {
    return loopNumber
  }
}




