const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNum = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNum];
        const playerChoice = this.classList[0];

        playerHand.style.animation = "none";
        computerHand.style.animation = "none";

        playerHand.src = "./asset/rock.png";
        computerHand.src = "./asset/rock.png";

        setTimeout(() => {
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";

          setTimeout(() => {
            playerHand.src = `./asset/${playerChoice}.png`;
            computerHand.src = `./asset/${computerChoice}.png`;
            sessionStorage.setItem("x", "fTU0VHIzS19WdDRCX2duaVROdTZ7RlRDUEhU");

            compareHands(playerChoice, computerChoice);
          }, 1700);
        }, 0);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      winner.textContent = "Player Wins";
      pScore++;
    } else {
      winner.textContent = "Computer Wins";
      cScore++;
    }
    updateScore();
  };

  startGame();
  playMatch();
};

game();
