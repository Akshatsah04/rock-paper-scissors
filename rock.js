let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choi");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");
const button = document.querySelector("#butt");
const body = document.querySelector("body");
const para = document.querySelectorAll(".ch");



const genCompChoice=()=>{
    const options = ["stone" , "paper" , "scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const showWin =(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        console.log("you win");
        msg.innerText =` you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userpara.innerText=userScore;
    }else{
        comScore++;
        console.log("comp win");
        msg.innerText = `you loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comppara.innerText=comScore;
    }
}

const playGame = (userChoice)=>{
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        console.log("draw");
        msg.innerText = "game was draw ! play again";
        msg.style.backgroundColor = "#081b31";
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ; 
        }else if(userChoice==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWin(userWin , userChoice , compChoice);
    }
   
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let light = true;
button.addEventListener("click" , ()=>{

    if(light){
        body.style.backgroundColor = "black";
        para.forEach((p)=>{
            p.style.color= "white";
        })
        light = false;
    }else{
        body.style.backgroundColor = "white";
        para.forEach((p)=>{
            p.style.color= "black";
        })
        light = true;
    }
});

