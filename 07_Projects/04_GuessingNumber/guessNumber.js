let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainChance = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value)
     console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number');
  } else if(guess < 0){
    alert('Please Enter a number Greater than 0')
  } else if(guess > 100){
    alert('Please Enter a Number less than equal to 100')
  }else{
    prevGuess.push(guess);
   
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over. Random Number ${randomNumber}`)
        endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess);
    }
  }

}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it Right.`)
  } else if(guess < randomNumber){
    displayMessage(`Number is TOOO Low`)
  } else if(guess > randomNumber){
    displayMessage(`Number is TOOO High`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remainChance.innerHTML = `${11 - numGuess}`

}

function displayMessage(msg){
  lowOrHigh.innerHTML=`<h2>${msg}</h2>`
}

function endGame(){
 userInput.value = '';
 userInput.setAttribute('disabled', '');
 p.classList.add('button');
 p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
 startOver.appendChild(p);
 playGame = false;
 
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
     randomNumber = parseInt(Math.random()*100 + 1)
     prevGuess = [];
     numGuess = 1;
     guessSlot.innerHTML = '';
     remainChance.innerHTML = `${11 - numGuess}`
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     playGame = true;

  })
}
