
var wins=0;
var losses=0;
var guesses=0;
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
var guessedLettersStatus=
		"<h2> Guessed Letters: " + guessedLettersDisplay + "</h2>";


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
		
				checkInput();
	   

	function checkInput() {
		if(arrValidLetters.indexOf(playerLetter)>-1) {
			var isValidLetter=true;
		}

		else	{
			var isValidLetter=false;
			var newGuess=false;
			displayStatus();
			displayGuessedLetters();
				}
			
			if((arrGuessedLetters.indexOf(playerLetter)==-1) && (isValidLetter)) {
				var newGuess=true;
			arrGuessedLetters.push(playerLetter);
				}

		else if(arrGuessedLetters.indexOf(playerLetter)>-1) {
			var newGuess=false;
			}


		if(arrActiveWord.indexOf(playerLetter)>-1) {
	
			var isWordLetter=true;
			
			var realWordLetter=1;
			
				}
				else {
						var isWordLetter=false;
						// checkLetter(isWordLetter);
						checkRemainingGuesses(isWordLetter,newGuess);
					}
			
			if ((isWordLetter) && (newGuess)) {
				arrCorrectGuess.push(playerLetter);
			// checkLetter(isWordLetter);
			}
					displayGuessedLetters();
					}

				displayStatus();
				displayGuessedLetters();

}
}


function displayStatus() {
	var currentWordDisplay="";
	for (i = 0; i < currentWord.length; i++) {
				
				if (arrGuessedLetters.indexOf(arrActiveWord[i])>-1) {
					var currentWordDisplay=currentWordDisplay + " " +arrActiveWord[i];
				var screenStatus=
				"<h2>" + currentWordDisplay + "</h2>";
				document.querySelector("#wordStatus").innerHTML = screenStatus;
	
				}
				
			else {
		
				var currentWordDisplay=currentWordDisplay + " " + "_";
				var screenStatus=
				"<h2>" + currentWordDisplay + "</h2>";
				document.querySelector("#wordStatus").innerHTML = screenStatus;
				
				}
				
	}
				checkSolved();

	}
	function checkSolved() {
	
		if(arrCorrectGuess.length==arrActiveWordNoDup.length) {
					console.log("SOLVED!");
					var puzzleSolved=true;
					var gameWin=true;
					wins++;
					restartGame(gameWin);
				}		
	}
	
function checkRemainingGuesses(isWordLetter,newGuess) {

	if ((isWordLetter==false) && (newGuess)) {
			numGuessesAllowed--;
			}
			else {
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
		var guessedLettersStatus=
		"<h2> Guessed Letters: " + guessedLettersDisplay + "</h2>";
	
		
		document.querySelector("#guessedStatus").innerHTML = guessedLettersStatus;
		}
	}


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

	for (n = 0; n < arrDuplicates.length; n++) {

		for (p = 0; p < arrActiveWordNoDup.length; p++) {
			var wordDuplicate=arrActiveWordNoDup.indexOf(arrDuplicates[n]);
			
				if(arrDuplicates[n]==arrActiveWordNoDup[wordDuplicate] && wordDuplicate>-1) {
			
				arrActiveWordNoDup.splice(wordDuplicate, 1);
						}
			
	}


}
for (q = 0; q < arrDuplicates.length; q++) {
	// console.log(arrDuplicates.length);
	// console.log(q);
			arrActiveWordNoDup.splice(0, 0,arrDuplicates[q]);
			// console.log(arrActiveWordNoDup);	
			}
for (m = 0; m < arrDuplicates.length; m++) {
	arrDuplicates[m]=arrActiveWordNoDup.indexOf
}
}

