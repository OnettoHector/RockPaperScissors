function getYourPlay(){
    return Math.floor(Math.random() * 3);
}

function computerPlay(){
    let x = getYourPlay();
    if (x == 0)
    return "rock";
    else if (x == 1)
    return "paper";
    else return "scissors";
}
/*Inserta un DIV luego del DIV que le indiquemos como parametro
Recibe:
-DIV existente tras el cual se posicionará el nuevo DIV
-ID del nuevo DIV a generar
-Texto que contendrá el nuevo DIV
*/
function insertDiv(yourContainer,newDivName,text){
    let container = document.querySelector(yourContainer);
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    
    div.setAttribute("style","color:white; text-align:center; font-family: 'Public Sans', sans-serif; ;font-size:15px;");
    div.setAttribute("id",newDivName)
    paragraph.textContent = text;
    
    
    container.insertAdjacentElement("afterend",div);
    div.appendChild(paragraph);
    return;
}
function changeDivText(yourDiv,text){
    let container = document.querySelector(yourDiv);
    container.textContent = text;
}

function cleanSlateById(id){
    let body = document.body;
    if (document.getElementById(id) != null){
    let div = document.querySelector("#"+id)
    body.removeChild(div);
}
    return;
}

function playRound(playerSelection){
    cleanSlateById("roundDiv");
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection){
    insertDiv(".scoreContainer","roundDiv","Tie!");
    return 0;}
    else if (playerSelection == "rock" && computerSelection == "paper"){
    insertDiv(".scoreContainer","roundDiv","You lose! "+computerSelection+" beats "+playerSelection+"!");
    return 2;}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
    insertDiv(".scoreContainer","roundDiv","You win! "+playerSelection+" beats "+computerSelection+"!");
    return 1;}
    else if (playerSelection == "paper" && computerSelection == "rock"){
    insertDiv(".scoreContainer","roundDiv","You win! "+playerSelection+" beats "+computerSelection+"!");
    return 1}
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        insertDiv(".scoreContainer","roundDiv","You lose! "+computerSelection+" beats "+playerSelection+"!");
        return 2;}
    else if (playerSelection == "scissors" && computerSelection == "paper"){
    insertDiv(".scoreContainer","roundDiv","You win! "+playerSelection+" beats "+computerSelection+"!");
    return 1;}
    else if (playerSelection == "scissors" && computerSelection == "rock"){
    insertDiv(".scoreContainer","roundDiv","You lose! "+computerSelection+" beats "+playerSelection+"!");
    return 2;}
}

function insertButton(yourContainer,btnName,text){
    let container = document.querySelector(yourContainer);
    let newBtn = document.createElement("button");
    newBtn.setAttribute("style","text-align:center; font-family:'Orbitron' ;font-size:30px;")
    newBtn.setAttribute("id",btnName);
    newBtn.classList.add('rainbow_text_animated');
    newBtn.textContent = text;
    container.appendChild(newBtn);
}

function game(playerChoice){
    if (playerScore < 5 && pcScore < 5){
    cleanSlateById("gameDiv");
    let result;
    result = playRound(playerChoice,computerPlay())
        if (result == 0){
            insertDiv("#roundDiv","gameDiv","Thats a tie on round "+(round)+" folks!");
            round++
        }
        else if (result == 1){
        insertDiv("#roundDiv","gameDiv","Player wins round "+(round)+"!");
        playerScore++;
        round++;
        changeDivText("#playerScore",playerScore.toString());
        }
        else {
            insertDiv("#roundDiv","gameDiv","PC wins round "+(round)+"!");
            pcScore++;
            round++;
            changeDivText("#pcScore",pcScore.toString());
        }
    }
    if ((playerScore == 5 || pcScore == 5)&& generatorFlag == 0){
    cleanSlateById("gameDiv");
    if (playerScore > pcScore){
    insertDiv("#roundDiv","gameDiv","Player wins the game! "+playerScore+"-"+pcScore);}
    else {insertDiv("#roundDiv","gameDiv","Computer wins the game! "+pcScore+"-"+playerScore);}
    insertDiv(".scoreContainer","replayBtnDiv","");
    insertButton("#replayBtnDiv","replayBtn","Play again");
    generatorFlag = 1;
}   
    if (generatorFlag == 1)
    {
        const replayBtn = document.querySelector("#replayBtn");
        replayBtn.addEventListener("click",function(){
            cleanSlateById("replayBtnDiv");
            cleanSlateById("gameDiv");
            cleanSlateById("roundDiv");
            generatorFlag = 0;
            playerScore = 0;
            pcScore = 0;
            round = 1;
            changeDivText("#playerScore",playerScore.toString());
            changeDivText("#pcScore",pcScore.toString());
        })
    }
}
let playerScore = 0;
let pcScore = 0;
let round = 1;
let generatorFlag = 0;

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",function(e){
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 6000);
})

const playBtns = document.querySelectorAll(".playBtn");
playBtns.forEach(btn => btn.addEventListener("click",function(e){
        game(e.target.id)
}));