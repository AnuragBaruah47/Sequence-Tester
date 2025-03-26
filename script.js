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
    randomNumber =  (Math.random() * 8 + 1).toFixed(0);
    patterns.push(randomNumber);
    if (randomNumber==1) {
      button1.style.backgroundColor="#FFFFFF"
      setTimeout(()=>{
        button1.style.backgroundColor="#73A5C6"
      },500)
    }
    if (randomNumber==2) {
      setTimeout(()=>{
        button2.style.backgroundColor="#73A5C6"
      },500)
      button2.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==3) {
      setTimeout(()=>{
        button3.style.backgroundColor="#73A5C6"
      },500)
      button3.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==4) {
      setTimeout(()=>{
        button4.style.backgroundColor="#73A5C6"
      },500)
      button4.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==5) {
      setTimeout(()=>{
        button5.style.backgroundColor="#73A5C6"
      },500)
      button5.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==6) {
      setTimeout(()=>{
        button6.style.backgroundColor="#73A5C6"
      },500)
      button6.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==7) {
      setTimeout(()=>{
        button7.style.backgroundColor="#73A5C6"
      },500)
      button7.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==8) {
      setTimeout(()=>{
        button8.style.backgroundColor="#73A5C6"
      },500)
      button8.style.backgroundColor="#FFFFFF"
    }
    if (randomNumber==9) {
      setTimeout(()=>{
        button9.style.backgroundColor="#73A5C6"
      },500)
      button9.style.backgroundColor="#FFFFFF"
    }
    buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
        randomNumber =(Math.random() * 8 + 1).toFixed(0);
        patterns.push(randomNumber);
        if (randomNumber==1) {
          button1.style.backgroundColor="#FFFFFF"
          setTimeout(()=>{
            button1.style.backgroundColor="#73A5C6"
          },500)
        }
        if (randomNumber==2) {
          setTimeout(()=>{
            button2.style.backgroundColor="#73A5C6"
          },500)
          button2.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==3) {
          setTimeout(()=>{
            button3.style.backgroundColor="#73A5C6"
          },500)
          button3.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==4) {
          setTimeout(()=>{
            button4.style.backgroundColor="#73A5C6"
          },500)
          button4.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==5) {
          setTimeout(()=>{
            button5.style.backgroundColor="#73A5C6"
          },500)
          button5.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==6) {
          setTimeout(()=>{
            button6.style.backgroundColor="#73A5C6"
          },500)
          button6.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==7) {
          setTimeout(()=>{
            button7.style.backgroundColor="#73A5C6"
          },500)
          button7.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==8) {
          setTimeout(()=>{
            button8.style.backgroundColor="#73A5C6"
          },500)
          button8.style.backgroundColor="#FFFFFF"
        }
        if (randomNumber==9) {
          setTimeout(()=>{
            button9.style.backgroundColor="#73A5C6"
          },500)
          button9.style.backgroundColor="#FFFFFF"
        }
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
