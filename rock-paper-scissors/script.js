let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let winningMessage = '';

const buttons = document.querySelectorAll('button');
const message = document.querySelector('#message');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
	let options = [ 'rock', 'paper', 'scissors' ];
	return options[getRandomInt(options.length)];
}

function getPlayerSelection() {
	let playerSelection = prompt('Pick rock, paper, or scissors').toLowerCase();
	return playerSelection;
}

function displayWinner(winningMessage) {
	winner.textContent = winningMessage;
}

function clearWinner() {
	winner.textContent = '';
}

function displayScore() {
	score.textContent = 'User: ' + playerWinCount + ', Computer: ' + computerWinCount + ', Tie: ' + tieCount;
}

function checkIfWinner() {
	if (playerWinCount == 5) {
		playerWinCount = 0;
		computerWinCount = 0;
		tieCount = 0;
		return 'Congrats, you win!';
	} else if (computerWinCount == 5) {
		playerWinCount = 0;
		computerWinCount = 0;
		tieCount = 0;
		return 'Oh no, the computer won.';
	}
}

function playRound(playerSelection, computerSelection) {
	let result = '';

	if (playerSelection == 'rock' && computerSelection == 'paper') {
		result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
		computerWinCount++;
		return result;
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
		playerWinCount++;
		return result;
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
		playerWinCount++;
		return result;
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
		computerWinCount++;
		return result;
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
		computerWinCount++;
		return result;
	} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
		playerWinCount++;
		return result;
	} else if (playerSelection == computerSelection) {
		result = "It's a tie!";
		tieCount++;
		return result;
	} else return 'Hmm, I think your input was bad. Please choose a valid option.';
}

/* function game() {
	let playerWinCount = 0;
	let computerWinCount = 0;
	let tieCount = 0;

	for (let i = 0; i < 5; i++) {
		let playerSelection = getPlayerSelection();
		let computerSelection = computerPlay();
		let matchResult = playRound(playerSelection, computerSelection);

		if (matchResult.includes('win')) {
			playerWinCount++;
		} else if (matchResult.includes('tie')) {
			tieCount++;
		} else computerWinCount++;

		console.log(matchResult);
	}

	return 'Computer wins: ' + computerWinCount + ', Player wins: ' + playerWinCount + ', Tie count: ' + tieCount;
} */

//onClick function for each button that calls playRound() with value of
//button for player selection and computerPlay() for computerSelection

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let result = playRound(button.value, computerPlay());
		clearWinner();
		message.textContent = result;
		displayScore();
		winningMessage = checkIfWinner();
		if (winningMessage != undefined) {
			displayWinner(winningMessage);
		}
	});
});
