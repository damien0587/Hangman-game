
 $(document).ready(function() {
 	//score begins with 0 wins
 	var score = 0;
 	var remainingChances = 10;
 	var lettersGuessed;
 	
 	//array of words to guess
 	var songArray = ["formation", "platinum", "flawless", "queen", "elevator", "twins", "irreplaceable", "countdown", "solange", "lemonade", "superbowl", "blonde", "houston", "bootylicious"
 	];
 
 	//variable that randomly selects a word 
 	var randomSong = songArray[Math.floor(Math.random() * songArray.length)];
 	console.log(randomSong);
 
 	//empty array to which blank spaces will be added according to the randomly chosen word from songArray
 	var answerArray = [];
 	//for loop to add appropriate number of "_"
 	for (var i = 0; i < randomSong.length; i++) {
  	  		answerArray[i] = " _ ";
  	  		console.log(answerArray);
	//send blank spaces to #blankSpaces on page
  	  $("#blankSpaces").text(answerArray.join(""));
  	
  	//register keypress
  	document.onkeyup = function() {
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  		console.log(userGuess);


  	

  	//search array for matching characters

  		//if keypress matches character in array, replace "_" with correct letter.

  		//else add keypress to #guessed and decrease remaining chances by 1
 }  		
 }
 }
 )
