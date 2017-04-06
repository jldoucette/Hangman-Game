
var wins=0;
var losses=0;
var guesses=0;
// var playerLetter="+";
var isValidLetter=false;
var isWordLetter=null;
var arrWords=["passport","ticket","border","tours","customs","luggage","airplane","trains","hotel","bellboy","beach"];
var arrValidLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrGuessedLetters=[];
var arrCorrectGuess=[];
var arrActiveWord=[];
var arrActiveWordNoDup=[];
var screenStatus="";
var guessedLettersDisplay="";
var indexofGuessedLetters=1;
var lettersCountGuessed=0;
var numGuessesAllowed=10;
var newGuess=false;

var randomWord=arrWords[Math.floor(Math.random() * arrWords.length)];
var currentWord=randomWord;

var screenHTML = "<h2>Press any key start playing!</h2>" +
         "<h4>Solved Words (Wins): " + wins + "</h4>" +
         "<h4>Words out of guesses: " + losses + "</h4>";
var guessRemainStatus=
		"<h2> Remaining Guesses: " + numGuessesAllowed + "</h2>";
		// document.querySelector("#remainingGuesses").innerHTML = guessRemainStatus;         
var guessedLettersStatus=
		"<h2> Guessed Letters: " + guessedLettersDisplay + "</h2>";
	
		
		
// document.querySelector("#game").innerHTML=screenHTML;

function initializeGame() {
document.querySelector("#remainingGuesses").innerHTML = guessRemainStatus;         
document.querySelector("#game").innerHTML=screenHTML;
document.querySelector("#guessedStatus").innerHTML = guessedLettersStatus;
ingestWord();
}
	

function ingestWord() {
				for (i = 0; i < currentWord.length; i++) {
					var currentLetter = currentWord.charAt(i);
					arrActiveWord.push(currentLetter);
					arrActiveWordNoDup.push(currentLetter);
					console.log(currentLetter);
					}
				console.log(arrActiveWord);
				eliminateDuplicates(arrActiveWordNoDup);
				console.log("Revised: " + arrActiveWordNoDup.length); 
				console.log("ingestWord: Completed");
				displayStatus();


	document.onkeyup = function(event) {
		var screenHTML = "<h2>Game in progress! Good Luck on your travels!</h2>" +
         "<h4>Solved Words (Wins): " + wins + "</h4>" +
         "<h4>Words out of guesses: " + losses + "</h4>";
			document.querySelector("#game").innerHTML=screenHTML;
				       var playerInput = event.key;
				       var playerLetter = playerInput.toLowerCase();
				// console.log(playerInput);
				// console.log(playerLetter);
				checkInput();
	       // var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];       


	function checkInput() {
		if(arrValidLetters.indexOf(playerLetter)>-1) {
			// console.log(arrValidLetters.indexOf(playerLetter));
			// console.log(playerLetter);
			var isValidLetter=true;
			// var actualGuess=true;
			console.log("checkInput executed, values: " + isValidLetter);
		}
		else	{
			var isValidLetter=false;
			var newGuess=false;
			console.log("CheckInput if: Not a Valid Letter");
			displayStatus();
			displayGuessedLetters();
				}
			
			if((arrGuessedLetters.indexOf(playerLetter)==-1) && (isValidLetter)) {
				var newGuess=true;
				console.log("new guess is set to: "+ newGuess);
			arrGuessedLetters.push(playerLetter);
			console.log("Just put  " + playerLetter  + "  in " + arrGuessedLetters);
			// checkLetter();
		}
		else if(arrGuessedLetters.indexOf(playerLetter)>-1) {
			var newGuess=false;
			console.log("new guess is set to: "+ newGuess);
			}
		
	console.log("About to start second if " + arrActiveWord.indexOf(playerLetter));

	if(arrActiveWord.indexOf(playerLetter)>-1) {
			// console.log(arrValidLetters.indexOf(playerLetter));
			// console.log(playerLetter);
			var isWordLetter=true;
			
			var realWordLetter=1;
			console.log("just set isWordLetter to true, Index Value: " + arrActiveWord.indexOf(playerLetter) + " " + playerLetter + " " + arrActiveWord);
				}
				else {
						var isWordLetter=false;
						// var newGuess=
						console.log("Failure of playerLetter in arrActiveWord just set isWordLetter to " + isWordLetter);
						checkLetter(isWordLetter);
						checkRemainingGuesses(isWordLetter,newGuess);
					}
			console.log("About to start another if, value of isWordLetter is " + isWordLetter);		
			if ((isWordLetter) && (newGuess)) {
			checkLetter(isWordLetter);
			console.log("Executed checkLetter, about to execute checkRemainingGuesses");
			console.log("Executed checkRemainingGuesses");
			console.log("checkInput if statement just executed checkLetter()");
			}
					displayGuessedLetters();
					}

	function checkLetter(isWordLetter) {
			console.log("Starting checkLetter, value of isWordLetter is " + isWordLetter);
			if (isWordLetter) { 
				console.log(isWordLetter);
				console.log(arrGuessedLetters.indexOf(playerLetter));
				console.log("checkLetter: Got to checkletter");
				arrCorrectGuess.push(playerLetter);
				console.log("checkLetter: pushed to arrCorrectGuess");
				console.log(arrCorrectGuess.length);
				
			}

			else {

				console.log(playerLetter);
			console.log("Did Not Validate checkLetter");
			console.log("This is the arrGuessedLetters " +arrGuessedLetters.indexOf(playerLetter));
		}
				displayStatus();
				displayGuessedLetters();

			}
		
	


}
}


function displayStatus() {
	var currentWordDisplay="";
	for (i = 0; i < currentWord.length; i++) {
				
				if (arrGuessedLetters.indexOf(arrActiveWord[i])>-1) {
					// console.log("displayStatus: Letter was guessed correctly");
					var currentWordDisplay=currentWordDisplay + " " +arrActiveWord[i];
					// console.log(currentWordDisplay);
				var screenStatus=
				"<h2>" + currentWordDisplay + "</h2>";
				document.querySelector("#wordStatus").innerHTML = screenStatus;
				// console.log("displayStatus:Got to lower display Status-Correct Guess");
			
	
				// checkSolved();
				}
				
			else {
		
				// console.log("displayStatus:Letter Not Guessed yet");
				var currentWordDisplay=currentWordDisplay + " " + "_";
				// console.log(currentWordDisplay);
				var screenStatus=
				"<h2>" + currentWordDisplay + "</h2>";
				document.querySelector("#wordStatus").innerHTML = screenStatus;
				// console.log("displayStatus:Got to lower display Status-Not Guessed");
				
				}
				
	}
				checkSolved();

	}
	function checkSolved() {
		console.log(arrCorrectGuess.length);
		console.log(arrActiveWordNoDup.length);
	

		if(arrCorrectGuess.length==arrActiveWordNoDup.length) {
					console.log("SOLVED!");
					var puzzleSolved=true;
					var gameWin=true;
					console.log("Set gameWin to true");
					wins++;
					console.log("Increase wins by one");
					console.log(puzzleSolved + " " + wins);
					restartGame(gameWin);
					console.log("Returned from restartGame");
				}		
	}
	// displayGuessedLetters();

function checkRemainingGuesses(isWordLetter,newGuess) {
	console.log("In Function checkRemainingGuesses");

	if ((isWordLetter==false) && (newGuess)) {
			numGuessesAllowed--;
			console.log("Allowed Guesses set to " + numGuessesAllowed);
			console.log("value of isWordLetter on CheckRemainingGuesses is " + isWordLetter);
			}
			else {
				console.log("checkRemainingGuesses failed test " + isWordLetter + " " + newGuess);
			}
			if (numGuessesAllowed==0) {
				losses++;
				var gameWin=false;
				restartGame(gameWin);
			}
			
	var guessRemainStatus=
		"<h2> Remaining Guesses: " + numGuessesAllowed + "</h2>";
		document.querySelector("#remainingGuesses").innerHTML = guessRemainStatus;		
	}

	function displayGuessedLetters() {

	var guessedLettersDisplay="";
	for (k = 0; k < arrGuessedLetters.length; k++) {
		var guessedLettersDisplay=guessedLettersDisplay + " " + arrGuessedLetters[k].toUpperCase();
		// console.log(guessedLettersDisplay);
		var guessedLettersStatus=
		"<h2> Guessed Letters: " + guessedLettersDisplay + "</h2>";
	
		
		document.querySelector("#guessedStatus").innerHTML = guessedLettersStatus;
		console.log("displayGuessedLetters: Guessed Letters");
		}
	}

// 	function checkRemainingGuesses(isWordLetter,newGuess) {
// 	console.log("In Function checkRemainingGuesses");
// 	if ((isWordLetter==false) && (newGuess)) {
// 			numGuessesAllowed--;
// 			console.log("Allowed Guesses set to " + numGuessesAllowed);
// 			console.log("value of isWordLetter on CheckRemainingGuesses is " + isWordLetter);
// 			}
// 			else {
// 				console.log("checkRemainingGuesses failed test " + isWordLetter + " " + newGuess);
// 			}
		

// }
function restartGame(gameWin) {
	if (gameWin) {
						var gameStatus=
					"<h2> Congrats! You Got the word!</h2>" +
					"<h2> Press any key to keep playing!</h2";

						var winningImage=
						"<img src='assets/images/" + currentWord + ".jpg' alt="+ currentWord +">";	
					}
					else {
						var gameStatus="<h2>Oops...you ran out of guesses!</h2>";
					
						var winningImage=
						"<h2 class='loseLanguage'> Sorry, you ran out of guesses and lost. Try again!</h2>"+
					"<h2 class='loseLanguage'> Press any key to keep playing!</h2";
					}
			document.querySelector("#roundstatus").innerHTML = gameStatus;
			document.querySelector("#resultpicture").innerHTML = winningImage;

			document.onkeyup = function(event) {
	
				       var playanotherround = event.key;
				       	var gameStatus="";
				       	var winningImage="";
				document.querySelector("#roundstatus").innerHTML = gameStatus;
				document.querySelector("#resultpicture").innerHTML = winningImage;
			reInitializeGame();
				}
			}
function reInitializeGame() {
window.guesses=0;
window.isValidLetter=false;
window.isWordLetter=null;
window.arrGuessedLetters=[];
window.arrCorrectGuess=[];
window.arrActiveWord=[];
window.arrActiveWordNoDup=[];
window.screenStatus="";
window.guessedLettersDisplay="";
window.indexofGuessedLetters=1;
window.lettersCountGuessed=0;
window.numGuessesAllowed=10;
window.newGuess=false;
window.randomWord=arrWords[Math.floor(Math.random() * arrWords.length)];
window.currentWord=randomWord;
window.screenHTML = "<h3>Press any key start playing!</h3>" +
         "<h4>Solved Words (Wins): " + wins + "</h4>" +
         "<h4>Words out of guesses: " + losses + "</h4>";
         document.querySelector("#game").innerHTML = screenHTML;
         initializeGame();
}



function eliminateDuplicates(arr) {

var arrDuplicates = arrActiveWordNoDup.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

console.log(arrDuplicates); 

for (n = 0; n < arrDuplicates.length; n++) {

		for (p = 0; p < arrActiveWordNoDup.length; p++) {
			var wordDuplicate=arrActiveWordNoDup.indexOf(arrDuplicates[n]);
			
			if(arrDuplicates[n]==arrActiveWordNoDup[wordDuplicate] && wordDuplicate>-1) {
			console.log("found a duplicate " + arrDuplicates[n]+ " " +wordDuplicate );
			arrActiveWordNoDup.splice(wordDuplicate, 1);
			console.log(arrActiveWordNoDup);
			console.log(arrDuplicates);
			console.log("Value of p inner for loop " + arrDuplicates[n]+ " " + p);
			}
			else {
			console.log("didn't find it " + wordDuplicate );
			console.log(arrActiveWordNoDup);
}
}


}
for (q = 0; q < arrDuplicates.length; q++) {
	console.log(arrDuplicates.length);
	console.log(q);
			arrActiveWordNoDup.splice(0, 0,arrDuplicates[q]);
			console.log(arrActiveWordNoDup);	
			}
for (m = 0; m < arrDuplicates.length; m++) {
	arrDuplicates[m]=arrActiveWordNoDup.indexOf
}
}

