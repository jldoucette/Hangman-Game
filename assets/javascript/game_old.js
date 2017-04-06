
var wins=0;
var losses=0;
var guesses=0;
// var playerLetter="+";
var isValidLetter=false;
var isWordLetter=null;
var arrWords=["passport","ticket","border","tours","customs","luggage","airplane","trains","hotel","bellboy","rentalcar"];
var arrValidLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrGuessedLetters=[];
var arrCorrectGuess=[];
var arrActiveWord=[];
var arrActiveWordNoDup=[]
var screenStatus="";
var guessedLettersDisplay="";
var indexofGuessedLetters=1;
var lettersCountGuessed=0;
var numGuessesAllowed=10;
var newGuess=false;
// var actualGuess=true;


var randomWord=arrWords[Math.floor(Math.random() * arrWords.length)];
var currentWord=randomWord;

var screenHTML = "<h3>Press any key start playing!</h3>" +
         "<h4>Solved Words (Wins): " + wins + "</h4>" +
         "<h4>Words out of guesses: " + losses + "</h4>";
         // "<h4>Guessed Letters:  " + arrGuessedLetters[0].toUpperCase() + "</h5>";

         // document.querySelector("#game").innerHTML = screenHTML;
// var screenStatus = "<h4>Guessed Letters:" + arrGuessedLetters[indexofGuessedLetters].toUpperCase() + "</h4>";
      
	

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
}

	document.onkeyup = function(event) {

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
			
	
				checkSolved();
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


	}
	function checkSolved() {
		console.log(arrCorrectGuess.length);
		console.log(arrActiveWordNoDup.length);
	

		if(arrCorrectGuess.length==arrActiveWordNoDup.length) {
					console.log("SOLVED!");
					var puzzleSolved=true;
					wins++;
					console.log(puzzleSolved + " " + wins);
					restartGame();
				}		
	}

	
	function displayGuessedLetters() {
	var guessedLettersDisplay="";
	for (k = 0; k < arrGuessedLetters.length; k++) {
		var guessedLettersDisplay=guessedLettersDisplay + " " + arrGuessedLetters[k].toUpperCase();
		// console.log(guessedLettersDisplay);
		var guessedLettersStatus=
		"<h2> Guessed Letters: " + guessedLettersDisplay + "</h2>";
		document.querySelector("#guessedStatus").innerHTML = guessedLettersStatus;
		// console.log("displayGuessedLetters: Guessed Letters");
		}
	}
function restartGame() {
						var gameStatus=
					"<h2> Congrats! You Got the word!</h2>";
		document.querySelector("#roundstatus").innerHTML = gameStatus;
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

