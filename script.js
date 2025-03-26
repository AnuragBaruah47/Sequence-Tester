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
let patterns = [];
let game = false;
//buttons ka logic sath mei main game ka bhi(logic of my buttons with the main game)
startButton.addEventListener("click", () => {
  start();
  if (game === true) {
    randomNumber =  (Math.random() * 8 + 1).toFixed(0);
    patterns.push(randomNumber);
    if (patterns.length>0) {
      for (let i = 0; i < patterns.length; i++) {
        const element = i+1;
        if (element) {
             roundUpdateInfo.innerText=`Round ${element}`
        }
      }
    }
    console.log(patterns);
    buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
        randomNumber =(Math.random() * 8 + 1).toFixed(0);
        patterns.push(randomNumber);
        if (patterns.length>0) {
          for (let i = 0; i < patterns.length; i++) {
            const element = i+1;
            if (element) {
                 roundUpdateInfo.innerText=`Round ${element}`
            }
          }
        }
      })
    })
}
});
function start() {
  game = true;
   startButton.disabled=true
}
function stop() {
  patterns = [];
  game = false;
  roundUpdateInfo.innerText="Game Over"
  startButton.disabled=false
}

function rounds(){

}