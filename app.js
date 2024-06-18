let userScore=0;
let opposerScore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user_Score= document.querySelector("#UserScore");
const opposer_Score= document.querySelector("#OpposerScore");
const genOpposerChoice =() =>{
    const options =["rock","paper","scissors"]
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
const drawGame=()=>{
    // console.log("Game is draw...");
    msg.innerText="Your Game is draw (Play again)."
    msg.style.backgroundColor ="darkblue";
}
const show_Winner= (userWin, userChoice, OpposerChoice)=>{
    if(userWin){
        userScore++;
        user_Score.innerText=userScore;
        // console.log("You win this game!");
        msg.innerText=`You win this game! ${userChoice} beats ${OpposerChoice}!`;
        msg.style.backgroundColor ="green";
    }else{
        // console.log("You lost this game!");
        opposerScore++;
        opposer_Score.innerText=opposerScore;
        msg.innerText=`You lost this game! ${OpposerChoice} beats ${userChoice}!`;
        msg.style.backgroundColor ="red";
    }
}
const PlayGame=(userChoice)=>{
    console.log("user choice =",userChoice);
// generate comuter choice
const OpposerChoice =genOpposerChoice();
console.log("opposer choice =",OpposerChoice);
if(userChoice===OpposerChoice){
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if (userChoice==="rock"){
    // computer scissors,paper
    userWin=OpposerChoice === "paper"? false : true;
}else if(userChoice==="paper"){
    //rock,scissors
    userWin=OpposerChoice ==="scissors"? false:true;
}
else{
    userWin=OpposerChoice==="rock" ?false:true;
}
show_Winner(userWin,userChoice,OpposerChoice);
}

}

choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked");
        PlayGame(userChoice);

});

});