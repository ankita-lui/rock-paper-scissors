let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

updateScore();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'SCISSORS') {
        if (computerMove === 'ROCK') {
            result = 'You lose.';
        } else if (computerMove === 'PAPER') {
            result = 'You win.';
        } else if (computerMove === 'SCISSORS') {
            result = 'Tie.';
        }

    } else if (playerMove === 'PAPER') {
        if (computerMove === 'ROCK') {
            result = 'You win.';
        } else if (computerMove === 'PAPER') {
            result = 'Tie.';
        } else if (computerMove === 'SCISSORS') {
            result = 'You lose.';
        }

    } else if (playerMove === 'ROCK') {
        if (computerMove === 'ROCK') {
            result = 'Tie.';
        } else if (computerMove === 'PAPER') {
            result = 'You lose.';
        } else if (computerMove === 'SCISSORS') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML=`${result}`;

    document.querySelector('.js-moves').innerHTML=`You
    <img src="/image/${playerMove}.png" class="move-icon"><img src="image/${computerMove}.png" class="move-icon">
    Computer`;
  

}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'ROCK';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'PAPER';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'SCISSORS';
    }

    return computerMove;
}
