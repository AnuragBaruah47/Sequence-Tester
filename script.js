const buttons = document.querySelectorAll(".numbuttons");
const startButton = document.querySelector(".startbutton");
const roundUpdateInfo = document.querySelector(".title");
const body=document.querySelector("body")
const button1=document.getElementById("1")
const button2=document.getElementById("2")
const button3=document.getElementById("3")
const button4=document.getElementById("4")
const button5=document.getElementById("5")
const button6=document.getElementById("6")
const button7=document.getElementById("7")
const button8=document.getElementById("8")
const button9=document.getElementById("9")
let randomNumber;
console.log(button1);

let patterns = [];
let game = false;
//buttons ka logic sath mei main game ka bhi(logic of my buttons with the main game)
startButton.addEventListener("click", () => {
  start();
  if (game === true) {
    randomNumber =(Math.random() * 8 + 1).toFixed(0);
    patterns.push(randomNumber);
    for (let i = 0; i < patterns.length; i++) {
      const element = patterns[i];
    }
    buttons.forEach((button)=>{
      if (randomNumber==1) {
        button1.style.backgroundColor="#ffffff"
      }
      button.addEventListener("click",()=>{
        randomNumber =(Math.random() * 8 + 1).toFixed(0);
        patterns.push(randomNumber);
        console.log(randomNumber);
        console.log(patterns);
      })
    })
}
});
function start() {
  game = true;
   roundUpdateInfo.innerText="Round 1"
   startButton.disabled=true
}
function stop() {
  patterns = [];
  game = false;
  roundUpdateInfo.innerText="Game Over"
  startButton.disabled=false
}
