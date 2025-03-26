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
    randomNumber = 1 //(Math.random() * 8 + 1).toFixed(0);
    patterns.push(randomNumber);
    console.log(randomNumber);
    if (randomNumber==1){
      setTimeout(()=>{
        button1.style.backgroundColor="#73A5C6"
      },500)
      button1.style.backgroundColor="#FFFFFF"
    }
    buttons.forEach((buttons) => {
      buttons.addEventListener("click", () => {
        if(buttons.id==randomNumber){
          setTimeout(()=>{
            body.style.backgroundColor="#000000"
          },100)
          body.style.backgroundColor="#008000"
        }else{
          setTimeout(()=>{
            body.style.backgroundColor="#000000"
          },100)
          body.style.backgroundColor="#ff0000"
          stop()
          }
        });
    });
}
});

// sarei mere function (mur gutei functions bur) (all my functions)
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
