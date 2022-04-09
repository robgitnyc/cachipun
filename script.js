let computerScore = 0;
let userScore = 0;
function computerChooses() {
    randomNum =  Math.floor(Math.random()*(4-1)) + 1;
    if (randomNum == 1) {
        return "rock";
    } 
    if (randomNum == 2) {
        return "paper";
    }
    if (randomNum == 3) {
        return "scissors";
    }
  }
  
function evalMatch(computerChoice, userChoice) {
    if (userChoice == null) {
        return "bye bye";
    }
    userChoiceLower = userChoice.toLowerCase();

  if (computerChoice == "rock") {
      if (userChoiceLower == "paper") {
          ++userScore;
          return `you win; partial score ${userScore} - ${computerScore}` ;
      }
      if (userChoiceLower == "scissors") {
          ++computerScore;
          return `you lose; Partial score ${userScore} - ${computerScore}`;
      }
    }
  if (computerChoice == "paper") {
      if (userChoiceLower == "scissors") {
          ++userScore;
          return `You win; Partial score: ${userScore} - ${computerScore}`;
      }
      if (userChoiceLower == "rock") {
          ++computerScore;
          return `You lose; partial score: ${userScore} - ${computerScore}`;
      }   
    }
  if (computerChoice == "scissors") {
      if (userChoiceLower == "rock") {
          ++userScore;
          return `You win; Partial score: ${userScore} - ${computerScore}`;
      }
      if (userChoiceLower == "paper") {
          ++computerScore;
          return `You los; partial score: ${userScore} - ${computerScore}`;
      }
    }
    if (computerChoice == userChoiceLower) {
      return `It's a tie; Partial score: ${userScore} - ${computerScore}`;
  }
    else {
    return "invalid choice " + `Partial score: ${userScore} - ${computerScore}`;
  }
}

function play1Round(weapon) {
    console.log(evalMatch(computerChooses(), weapon));
}

function play5Rounds() {
   
    for (let i = 0; i < 5; i++) {
      play1Round(prompt("ENTER YOUR WEAPON", "WEAPON HERE"));
    
}
    console.log("USER SCORE =" + userScore);
    console.log("COMPUTER SCORE =" + computerScore);
    if (computerScore > userScore) {
        console.log("FINAL SCORE: COMPUTER WINS")
    } else if (computerScore < userScore) {
        console.log("FINAL SCORE: YOU WIN");        
    } else if (computerScore == userScore)  {
        console.log("FINAL SCORE: IT'S A TIE");
    } else {
        console.log("something weird happened");
    }
}

   
//
//play5Rounds();


