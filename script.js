const buttons=document.querySelectorAll(".numbuttons")
const startButton=document.querySelector(".startbutton")
const roundUpdateInfo=document.querySelector(".title")
let randomNumber;
let patterns=[]
let game=false
//buttons ka logic sath mei main game ka bhi(logic of my buttons with the main game)
startButton.addEventListener("click",()=>{
    start()
    if (game===true){
        randomNumber=(((Math.random())*8)+1).toFixed(0)
        patterns.push(randomNumber)
        buttons.forEach((buttons)=>{
            let nameOftheButtons=buttons.name
            buttons.addEventListener("click",()=>{

            })
        })
    }
})

// sarei mere function (mur gutei functions bur) (all my functions)
function start(){
     game=true
     startButton.setAttribute("disabled","true")
}
function stop(){
    patterns=[]
    game=false
    startButton.setAttribute("disabled","false")
}
