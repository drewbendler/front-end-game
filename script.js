// HANGMAN 

// 1 ) create a interface with a dashes based on the random word length

// 1a) hide word while player is guessing


// 1b) button click to randomize word.

// 1c) display keyboard for click or input for type

// 2 ) create an input or click feature to select the next letter 

// 3 ) if letter is in the selected word, place the letter in the display box however many times letter appears in word 

// 4 ) if letter is wrong, add body part 

// 5 ) if the playerd guesses the word, they win.

// 6 ) if they guess wrong six times, game is over.

// 7 ) reset functionality 

//8 ) ** optional ** create input to choose your own word 



let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let words = ['applause', 'condition', 'effective', 'banjo', 'legacy', 'pajama', 'parameter', 'vulnerable', 'sustainable', 'sector', 'predict', 'phenomenon', 'garage', 'trip', 'comupter', 'cafe', 'rain', 'gif', 'wack'] ;

let errors = 0;

let maxErrors = 8;

let homePage = document.querySelector('.container-title');

let gamePlay = document.querySelector('.container-game');

let randomWord = words[Math.floor(Math.random() * words.length)];

let playButton = document.querySelector('.play-button');

let chooseWord = document.querySelector('#chooseWord');

let currentGuesses = [];

let currentErrors = [];




chooseWord.addEventListener('click', makeWord);


let wordAtPlay = randomWord.split('');




playButton.addEventListener('click', playGame);


let letters = document.querySelectorAll('.letter-spaces');

function playGame (e) {
	e.preventDefault();
	homePage.style.display = 'none';
	gamePlay.style.display = 'flex';
	
}



let guessWord = document.querySelector('.guessWord');
function makeWord (e) {

for (i = 0; i < wordAtPlay.length; i++) {
	let underline = document.createElement('div')
	underline.classList.add('letter-spaces');
	underline.innerText = wordAtPlay[i];
	guessWord.appendChild(underline);

}
	return guessWord;
}




let keyboard = document.querySelector('.keyboard')



for (i = 0; i < alphabet.length; i++) {
	let letters = document.createElement('div')
	letters.classList.add('letters')
	letters.addEventListener('click', guessedLetter)
	letters.setAttribute('data-letter', alphabet[i]);
	letters.innerText = alphabet[i];
	keyboard.appendChild(letters);

}

let gL = [];

console.log(wordAtPlay);


function guessedLetter(e) {

	gL.push(e.target.innerText);

e.target.style.color = 'white';
e.target.style.border = "none";
e.target.style.hover = 'white';
e.target.style.fontSize = '0px';

  wordAtPlay.forEach(function(word_value, i) {


gL.forEach(function(gL_value, j) {

if (word_value === gL_value) {

console.log('success');

let lS = document.querySelectorAll('.letter-spaces');

lS[i].classList.add('guessedLetter');

currentGuesses.push(lS[i].innerText);

console.log(currentGuesses);

errors --;


}  

      })


 });

if (wordAtPlay.indexOf(gL) === -1) {



errors += 1
  	console.log('failed');

let numbErrors = document.querySelector('.numberOfGuesses');

numbErrors.setAttribute('class', 'numberOfGuesses');

numbErrors.innerText = "Errors: " + errors + "/8";


  	
  }


checkWinner();

 gL.pop();
console.log(errors);

checkloser();

makeStickGuy();

}


let playerWon = document.querySelector('.won');
let playerLost = document.querySelector('.lose');

function checkloser() {

if (errors === maxErrors) {

	playerLost.innerText = "You Lost!";


}
}



function checkWinner() {

if (currentGuesses.length === wordAtPlay.length) {

playerWon.innerText = "You Won!";

let letters = document.querySelector('.letters');

letters.setAttribute('color', 'green');
}
}


// put the imgs in the html and set style.display to none/ block etc....


function makeStickGuy () {
let hangmanPic1 = document.getElementById('1');
let hangmanPic2 = document.getElementById('2');
let hangmanPic3 = document.getElementById('3');
let hangmanPic4 = document.getElementById('4');
let hangmanPic5 = document.getElementById('5');
let hangmanPic6 = document.getElementById('6');
let hangmanPic7 = document.getElementById('7');
let hangmanPic8 = document.getElementById('8');

	if (errors === 1) {

		
		hangmanPic1.classList.add('hmPicDisplay');



}
	if (errors === 2) {

		hangmanPic2.classList.add('hmPicDisplay');

		hangmanPic1.setAttribute('class','hmPic');

}
	if (errors === 3) {
		
		
		hangmanPic3.classList.add('hmPicDisplay');
		hangmanPic2.setAttribute('class','hmPic');

}
	if (errors === 4) {
		
		
		hangmanPic4.classList.add('hmPicDisplay');
		hangmanPic3.setAttribute('class','hmPic');

}
	if (errors === 5) {
		
		
		hangmanPic5.classList.add('hmPicDisplay');
		hangmanPic4.setAttribute('class','hmPic');

}
	if (errors === 6) {
		
		
		hangmanPic6.classList.add('hmPicDisplay');
		hangmanPic5.setAttribute('class','hmPic');

}
	if (errors === 7) {

			
		hangmanPic7.classList.add('hmPicDisplay');
		hangmanPic6.setAttribute('class','hmPic');

}	if (errors === 8) {
		
		
		hangmanPic8.classList.add('hmPicDisplay');
		hangmanPic7.setAttribute('class','hmPic');


}
}

