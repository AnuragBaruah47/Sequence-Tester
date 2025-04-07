const allButtons=document.querySelectorAll(".numbuttons")
const body=document.querySelector("body")
const titlecontainer=document.querySelector(".title")
const totalScore=document.querySelector(".score")
let game=false
let round=0
let userInput=[]
let pattersArray=[]
let randomNumber=(((Math.random()*8)+1)).toFixed(0)


