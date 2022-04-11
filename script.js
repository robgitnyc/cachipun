let computerScore = 0;
let userScore = 0;
let counter = 0;


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
          ++counter;
          
          return `you win; partial score ${userScore} - ${computerScore}` ;
      }
      if (userChoiceLower == "scissors") {
          ++computerScore;
          ++counter;
          return `you lose; Partial score ${userScore} - ${computerScore}`;
      }
    }
  if (computerChoice == "paper") {
      if (userChoiceLower == "scissors") {
          ++userScore;
          ++counter;
          return `You win; Partial score: ${userScore} - ${computerScore}`;
      }
      if (userChoiceLower == "rock") {
          ++computerScore;
          ++counter;
          return `You lose; partial score: ${userScore} - ${computerScore}`;
      }   
    }
  if (computerChoice == "scissors") {
      if (userChoiceLower == "rock") {
          ++userScore;
          ++counter;
          return `You win; Partial score: ${userScore} - ${computerScore}`;
      }
      if (userChoiceLower == "paper") {
          ++computerScore;
          ++counter;
          return `Computer chose ${computerChoice} partial score: ${userScore} - ${computerScore}`;
      }
    }
    if (computerChoice == userChoiceLower) {
        ++counter;
      return `It's a tie; Partial score: ${userScore} - ${computerScore}`;
  }
    else {
    return "invalid choice " + `Partial score: ${userScore} - ${computerScore}`;
  }
}



const info1 = document.querySelector("#info");
const info2 = document.querySelector("#info2");

//const div3 = document.querySelector("#div3");
/*
let div5 = document.createElement("div");
div5.className = "zero5";
div5.textContent = "ZERO5";
info1.append(div5);

let div6 = document.createElement("div");
div6.className = "zero6";
div6.innerHTML = "<em>ZERO666</em>";
info1.append(div6);


/* esta sintaxis no funciona: 
document.createElement("div");
document.createElement("div").className = "zerosiete";
document.createElement("div").textContent = "<strong> 007 </strong>";
info1.append(document.createElement("div"));


//esta si funciona ¿por que?:

let div7 = document.createElement("div");
div7.className = "zerosiete";
div7.innerHTML = "<strong> 007 </strong>";
info1.append(div7);

*/

function play1Round(weapon) {
    
    info1.textContent = evalMatch(computerChooses(), weapon);
    
    let div4 = document.createElement("div");
    div4.className = "div5"
    info1.append(div4);

    let div5 = document.createElement("div");
    div5.className = "div5"
    info1.append(div5);

    let div6 = document.createElement("div");
    div6.className = "div6";
    info1.append(div6); 

    let div7 = document.createElement("div");
    div7.className = "div7";
    info1.append(div7);

    if (computerScore > userScore && (userScore == 5 || computerScore == 5)) {
        div6.textContent = "COMPUTER WINS";
    } else if (computerScore < userScore && (userScore == 5 || computerScore == 5)) {
        div6.textContent ="YOU WIN";        
    } else if (computerScore == userScore && (userScore == 5 || computerScore == 5))  {
        div6.textContent = "IT'S A TIE";
    } else if  (userScore == 5 || computerScore == 5) {
        div6.textContent = "something weird happened";
    }

    if (userScore == 5 || computerScore == 5) {  
        let buPaper = document.querySelector("#paper");
        let buScissors = document.querySelector("#scissors");
        let buRock = document.querySelector("#rock");
        buScissors.style.display = "none";
        buPaper.style.display = "none";
        buRock.style.display = "none";
        

        div5.innerHTML = `FINAL SCORE: <br> YOU = ${userScore}
        COMPUTER = ${computerScore}`;
        div7.innerHTML = `<button class="reset">Play Again</button>`;

        
        playAgain();
        function playAgain(){
            let resetBtn = document.querySelector(".reset");
            let weapons = document.querySelector(".weapon");
                resetBtn.addEventListener('click', () => {
                    computerScore =0, userScore = 0, div6.remove(), div5.remove(), div7.remove(), info1.textContent = "Play!", buScissors.style.display = "", buRock.style.display = "", buPaper.style.display = "", info1.style.display = "";
                  });
/*
                  resetBtn.addEventListener('click', () => {
                    div6.remove(), div5.remove(), div7.remove();
                  });
      */  
        }


    } 
    
    }




function play5Rounds() {
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");
    const buttons = document.querySelectorAll('button');
    const buttonsArr = Array.from(buttons);

  

//    for (let i = 0; i < 5; i++) {
  //    play1Round(prompt("ENTER YOUR WEAPON", "WEAPON HERE"));
  buttonsArr.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      play1Round(button.id);
    });
  });
    

    


}



play5Rounds();



