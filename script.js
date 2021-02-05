let userScore = 0;
let computerScore = 0;
const userScoreGame = document.getElementById("user-score");
const computerScoreGame = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const resultText = document.querySelector(".result > p");
const rockItem = document.getElementById("r");
const paperItem = document.getElementById("p");
const scissorsItem = document.getElementById("s");

function getRandomChoice() {
    const rndChoices = ["r", "p", "s"];
    const rndNum = Math.floor(Math.random() * 3);
    return rndChoices[rndNum];
}

function wordConverter(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";
}


function winner(userChoice, computerChoice) {
    const userScoreWin = document.getElementById(userChoice);
    userScore++;
    userScoreGame.innerHTML = userScore;
    computerScoreGame.innerHTML = computerScore;
    resultText.innerHTML = `${wordConverter(userChoice)} beats ${wordConverter(computerChoice)} [You Won!]`;
    userScoreWin.classList.add(".green-glow");
    setTimeout(() => {
        userScoreWin.classList.remove(".green-glow")
    },300);
}

function loser(userChoice, computerChoice) {
    const userScoreWin = document.getElementById(userChoice);
    computerScore++;
    userScoreGame.innerHTML = userScore;
    computerScoreGame.innerHTML = computerScore;
    resultText.innerHTML = `${wordConverter(userChoice)} loses to ${wordConverter(computerChoice)} [You Lost!]`;
    userScoreWin.classList.add(".red-glow");
    setTimeout(() => {
        userScoreWin.classList.remove(".red-glow")
    },300);
}

function draw(userChoice, computerChoice) {
    const userScoreWin = document.getElementById(userChoice);
    resultText.innerHTML = `${wordConverter(userChoice)} equals ${wordConverter(computerChoice)} [It's a draw...]`;
}

function rockPaperScissorsGame(userChoice) {
    const computerChoice = getRandomChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            winner(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loser(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function gameItems() {
    rockItem.addEventListener("click", () => rockPaperScissorsGame("r"));
    paperItem.addEventListener("click", () => rockPaperScissorsGame("p"));
    scissorsItem.addEventListener("click", () => rockPaperScissorsGame("s"));
}

gameItems();