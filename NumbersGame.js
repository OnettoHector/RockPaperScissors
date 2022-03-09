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

function playRound(playerSelection,computerSelection){
    let playerSelectionCaps = playerSelection.toLowerCase();
    console.log("Player chose "+playerSelectionCaps+" and pc chose "+computerSelection);
    if (playerSelectionCaps == computerSelection){
    return "Tie!";}
    else if (playerSelectionCaps == "rock" && computerSelection == "paper"){
    return "You lose! "+computerSelection+" beats "+playerSelectionCaps+"!";}
    else if (playerSelectionCaps == "rock" && computerSelection == "scissors"){
    return "You win! "+playerSelectionCaps+" beats "+computerSelection+"!";}
    else if (playerSelectionCaps == "paper" && computerSelection == "rock"){
    return "You win! "+playerSelectionCaps+" beats "+computerSelection+"!";}
    else if (playerSelectionCaps == "paper" && computerSelection == "scissors"){
    return "You lose! "+computerSelection+" beats "+playerSelectionCaps+"!";}
    else if (playerSelectionCaps == "scissors" && computerSelection == "paper"){
    return "You win! "+playerSelectionCaps+" beats "+computerSelection+"!";}
    else if (playerSelectionCaps == "scissors" && computerSelection == "rock"){
    return "You lose! "+computerSelection+" beats "+playerSelectionCaps+"!";}
}

function game(){
    let i;
    let playerChoice;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for(i=0;i<5;i++)
    {
        playerChoice = prompt("Enter round "+(i+1)+" play");
        result = playRound(playerChoice,computerPlay())
        if (result.includes("Tie!")){
            console.log("Thats a tie on round "+(i+1)+" folks!");
            continue;
        }
        else if (result.includes("You win!")){
        console.log("Player wins round "+(i+1)+"!");
        playerScore++;
        }
        else {
            console.log("PC wins round "+(i+1)+"!");
            computerScore++;
    }
}
    if (playerScore > computerScore)
    return "Player wins the game! "+playerScore+"-"+computerScore;
    else return "Computer wins the game!"+computerScore+"-"+playerScore;

}

//console.log(playRound("paper",computerPlay()));
console.log(game());