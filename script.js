const allButtons = document.querySelectorAll(".numbuttons");
const body = document.querySelector("body");
const titlecontainer = document.querySelector(".title");
const totalScore = document.querySelector(".score");
const startButton = document.querySelector(".startbutton");
const clickAudio= new Audio("click.wav")
const endAudio= new Audio("lost.wav")
let game = false;
let round = 0;
let userInput = [];
let pattersArray = [];
let randomNumber = (Math.random() * 8 + 1).toFixed(0);

// now all the function()

const startFunction = () => {
  game = true;
  totalScore.innerText=``
  round = 1;
  userInput = [];
  pattersArray = [];
  startButton.disabled = true;
  titlecontainer.innerText = `Round ${round}`;
  clickAudio.play()
  endAudio.pause()
  colorBlink();
};

const colorBlink = () => {
  userInput = [];
  randomNumber = (Math.random() * 8 + 1).toFixed(0);
  pattersArray.push(randomNumber);
  let randomBox = document.getElementById(randomNumber)
      setTimeout(() => {
        randomBox.style.backgroundColor=` #72a4c5`
      }, 300);
     randomBox.style.backgroundColor=`rgb(255, 255, 255)`
}

const endFunction = () => {
  titlecontainer.innerText=`Game Over!`
  totalScore.innerText = `Your Score:${round - 1} `
  startButton.disabled = false;
  game = false;
};

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!game) return;
    let userInputId = button.id;
    userInput.push(userInputId);
    let pattersArrayString = pattersArray.join(" ");
    clickAudio.play()
    let userInputString = userInput.join(" ");
    if (userInputString === pattersArrayString){
      clickAudio.play()
      setTimeout(() => {
        body.style.backgroundColor = " #000000";
      }, 100);
      body.style.backgroundColor = "	#90EE90";
      round++;
      titlecontainer.innerText = `Round ${round}`;
      setTimeout(()=>{
            colorBlink()
      }, 300);
    } else if (!pattersArrayString.startsWith(userInputString)) {
      endAudio.play()
      setTimeout(() => {
        body.style.backgroundColor = `rgb(0, 0, 0)`;
      }, 100);
      body.style.backgroundColor = `rgb(255, 0, 0)`;
      endFunction();
    }
  });
});
startButton.addEventListener("click", startFunction)
