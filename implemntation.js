// const optionBtn = document.querySelectorAll("button");

// optionBtn.forEach((button) => {
//   button.addEventListener("click", getPlyerChoice);
// });

// function getComputerChoice() {
//   choice = ["rock", " paper", "scissors"];
//   return choice[Math.floor(Math.random() * choice.length)];
// }

// const playRound = (player, computer) => {
//   player = player.toLowerCase();
//   computer = player.toLowerCase();
//   playerScoreBoard = document.querySelector(".player-count");
//   computerScoreBoard = document.querySelector(".computer-count");
//   let computerScore = 0;
//   let playerScore = 0;

//   const result = document.getElementsByClassName(".result-display-container");

//   if (player === computer) {
//     result.textContent = "Tie";
//   } else if (player === "rock") {
//     if (computer === "paper") {
//       computerScore++;
//       result.textContent = "Computer Won";
//       computerScoreBoard.textContent = computerScore;
//     } else {
//       playerScore++;
//       result.textContent = "Player Won";
//       playerScoreBoard.textContent = playerScore;
//     }
//   } else if (player === "paper") {
//     if (computer === "scissor") {
//       computerScore++;
//       result.textContent = "Computer Won";
//       computerScoreBoard.textContent = computerScore;
//     } else {
//       playerScore++;
//       result.textContent = "Player Won";
//       playerScoreBoard.textContent = playerScore;
//     }
//   } else if (player === "scissor") {
//     if (computer === "rock") {
//       computerScore++;
//       result.textContent = "Computer Won";
//       computerScoreBoard.textContent = computerScore;
//     } else {
//       playerScore++;
//       result.textContent = "Player Won";
//       playerScoreBoard.textContent = playerScore;
//     }
//   }
//   //return { playerScore, computerScore };
// };

// const checkWinner = () => {
//   const result = document.getElementsByClassName(".result-display-container");
//   const playerScore = document.getElementById("#player-count");
//   const computerScore = document.getElementById("#computer-count");

//   while (
//     parseInt(playerScore.textContent) === 5 ||
//     parseInt(computerScore.textContent) === 5
//   ) {
//     const optionBtn = document.querySelectorAll("button");
//     optionBtn.forEach((button) => {
//       button.addEventListener("click", (event) => {
//         playRound(event.target.id, getComputerChoice());
//       });
//     });
//   }
//   if (parseInt(playerScore.textContent) === 5) {
//     result.textContent = "Player win!";
//   } else if (parseInt(computerScore.textContent) === 5) {
//     result.textContent = "Computer win!";
//   }

//   // optionBtn.forEach((button) => {
//   //   button.addEventListener("click", getPlyerChoice);
//   // });
// };

// checkWinner();
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  const playerScoreBoard = document.querySelector(".player-count");
  const computerScoreBoard = document.querySelector(".computer-count");
  const result = document.querySelector(".result-display-container");

  if (player === computer) {
    result.textContent = "Tie";
  } else if (player === "rock") {
    if (computer === "paper") {
      computerScore++;
      result.textContent = "Computer Won";
    } else {
      playerScore++;
      result.textContent = "Player Won";
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
      computerScore++;
      result.textContent = "Computer Won";
    } else {
      playerScore++;
      result.textContent = "Player Won";
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      computerScore++;
      result.textContent = "Computer Won";
    } else {
      playerScore++;
      result.textContent = "Player Won";
    }
  }

  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;

  if (playerScore === 5) {
    result.textContent = "Player wins!";
  } else if (computerScore === 5) {
    result.textContent = "Computer wins!";
  }
}

const optionBtns = document.querySelectorAll(".button");

optionBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(event.target.value, getComputerChoice());
  });
});
