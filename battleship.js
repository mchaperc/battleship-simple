$(document).ready(function() {

	startGame();
	playGame();

})

var shipLocation = [], randomNum = 0, shipSunk = false, guesses = 0, hits = 0;

function startGame() {

	startNum = Math.floor((Math.random() * 7));
	if (startNum > 4) {
		shipLocation.push(startNum, startNum-1, startNum-2);
	} else {
		shipLocation.push(startNum, startNum+1, startNum+2);
	}
	console.log(shipLocation);
}

function playGame() {

	while (!shipSunk) {
		var guess = prompt("Pick a number between 0 and 6 in an attempt to sick my battleship!");
		if (isNaN(Number(guess))) {
			var guess = prompt("Please try picking a number this time...");
		}
		guesses++;
		// for (var i = 0; i < shipLocation.length; i++) {
		// 	if (guess == shipLocation[i]) {
		// 		shipLocation.splice(i, 1);
		// 		alert("You scored a direct hit!")
		// 	}
		// }
		if (guess == shipLocation[0] || guess == shipLocation[1] || guess == shipLocation[2]) {
			var index = shipLocation.indexOf(Number(guess));
			console.log(index);
			shipLocation.splice(index, 1);
			alert("You scored a direct hit!");
			hits++;
			if (hits >= 3) {
				shipSunk = true;
			}
		} else {
			alert("You missed! Try again.")
		}
	}

	alert("Great job! You sunk my battleship using " + guesses + " guesses!");

	if (confirm('Play again?')) {
		guesses = 0;
		hits = 0;
		shipSunk = false;
		startGame();
		playGame();
	} else {
		alert("Well, thank you for playing!");
	}
}