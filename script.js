let rulesButton = document.querySelector('.rules');
let rulesBox = document.querySelector('.hidden');
let crossButton = document.querySelector('.cross');
let gameBoard= document.querySelector('.game');

let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let yourScore = parseInt(localStorage.getItem("yourScore")) || 0;

function updateScores() {
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("yourScore").innerText = yourScore;
}

rulesButton.addEventListener('click', function() {
    if (rulesBox.style.display === 'none' || rulesBox.style.display === '') {
        rulesBox.style.display = 'block';
        crossButton.style.display = 'block';
    }
});

crossButton.addEventListener('click', function(){
    rulesBox.style.display = 'none';
    crossButton.style.display = 'none'; 
});

const options = ["rock", "paper", "scissors"];



function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    gameBoard.style.display = 'none';
    const resultsBoard = document.querySelector('.results_board');
    resultsBoard.style.display = 'block';

    if (playerSelection === "rock") {
        changeElementColor(".outer_circle_results", "#0074B6");
    } else if (playerSelection === "paper") {
        changeElementColor(".outer_circle_results", "#FFA943");
    } else {
        changeElementColor(".outer_circle_results", "#BD00FF");
    }

    if (computerSelection === "rock") {
        changeElementColor(".outer_circle_results1", "#0074B6");
    } else if (computerSelection === "paper") {
        changeElementColor(".outer_circle_results1", "#FFA943");
    } else {
        changeElementColor(".outer_circle_results1", "#BD00FF");
    }

    const playerChoiceImg = document.getElementById("player-choice");
    const computerChoiceImg = document.getElementById("computer-choice");
    playerChoiceImg.src = `${playerSelection}.png`; 
    computerChoiceImg.src = `${computerSelection}.png`; 


    const resultMessage = document.getElementById("result");
    resultMessage.textContent = "";

    const existingButtons = resultMessage.parentElement.querySelectorAll("button");
    existingButtons.forEach((button) => {
        button.remove();
    });;
    const computerElement = document.getElementById('computer-element');
    const playerElement = document.getElementById('player-element');


    if (playerSelection === computerSelection) {
        document.getElementById("result").innerText += "TIE UP";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        document.getElementById("result").textContent += "YOU WIN";
        const lineBreak = document.createElement("br");
        document.getElementById("result").appendChild(lineBreak);
        const againstPC = document.createElement("span");
        againstPC.textContent = "AGAINST PC";
        againstPC.style.fontSize = "25px";
        document.getElementById("result").appendChild(againstPC);
        yourScore++;
        changeElementColor(".outer_circle_results", "#0074B6", true);
        const nxt = document.querySelector('#nxt');
        nxt.style.display = 'block';
    } else {
        document.getElementById("result").textContent += "YOU LOST";
        const lineBreak = document.createElement("br");
        document.getElementById("result").appendChild(lineBreak);
        const againstPC = document.createElement("span");
        againstPC.textContent = "AGAINST PC";
        againstPC.style.fontSize = "25px";
        document.getElementById("result").appendChild(againstPC);
        computerScore++;
        changeElementColor(".outer_circle_results1", "#0074B6", true);
        const nxt = document.querySelector('#nxt');
        nxt.style.display = 'none';
    }
    


    localStorage.setItem("computerScore", computerScore);
    localStorage.setItem("yourScore", yourScore);
    updateScores();

    const paragraph = document.getElementById("result"); 
    const button = document.createElement("button");
    button.textContent = "PLAY AGAIN";
    button.style.width = "174px";
    button.style.height = "44px";
    button.style.backgroundColor = "white";
    button.style.borderRadius = "9px";
    button.style.borderColor = "white";
    button.style.color = "#6B6B6B" ;
    if( document.getElementById("result").innerText === "TIE UP"){
        button.textContent = "REPLAY";
    }
    paragraph.parentElement.appendChild(button);
    button.addEventListener("click", () => {
        gameBoard.style.display = 'block';
        nxt.style.display = 'none';
        resultsBoard.style.display = 'none';

        updateScores();
    });

    nxt.addEventListener("click", ()=>{
        window.location.href = 'index1.html';
    });
}

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

stone.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissors"));
updateScores();

function changeElementColor(selector, hexColor, winner = false) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.backgroundColor = hexColor;
      if (winner) {
        element.classList.add('winner');
      } else {
        element.classList.remove('winner');
      }
    }
  }


