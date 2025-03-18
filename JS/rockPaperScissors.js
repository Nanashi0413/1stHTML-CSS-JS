const scoreBoard = {
  wins: 0,
  losses: 0,
  draws: 0
};

// Load scoreBoard from local storage
function loadScoreBoard() {
  const storedScoreBoard = localStorage.getItem('scoreBoard');
  if (storedScoreBoard) {
    Object.assign(scoreBoard, JSON.parse(storedScoreBoard));
    document.getElementById('wins').innerText = scoreBoard.wins;
    document.getElementById('losses').innerText = scoreBoard.losses;
    document.getElementById('draws').innerText = scoreBoard.draws;
  }
}

// Save scoreBoard to local storage
function saveScoreBoard() {
  localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === computerMove) {
    result = 'It\'s a draw!';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  if (result === 'You win!') {
    scoreBoard.wins += 1;
  } else if (result === 'You lose!') {
    scoreBoard.losses += 1;
  } else {
    scoreBoard.draws += 1;
  }

  document.getElementById('wins').innerText = scoreBoard.wins;
  document.getElementById('losses').innerText = scoreBoard.losses;
  document.getElementById('draws').innerText = scoreBoard.draws;

  document.querySelector('.player-computer-move')
  .innerHTML = `You Picked: <img src="images/${playerMove}-emoji.jpg" class="move-icon">
               Computer Picked: <img src="images/${computerMove}-emoji.jpg" class="move-icon">`;

  document.getElementById('js-result').innerText = result;

  saveScoreBoard();
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore() {
  scoreBoard.wins = 0;
  scoreBoard.losses = 0;
  scoreBoard.draws = 0;

  document.getElementById('wins').innerText = scoreBoard.wins;
  document.getElementById('losses').innerText = scoreBoard.losses;
  document.getElementById('draws').innerText = scoreBoard.draws;

  saveScoreBoard();
}

// Load the scoreBoard when the page loads
window.onload = loadScoreBoard;