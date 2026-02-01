# Projects related to DOM

## Projects-01 : Color changer
### Solution code:
```Javascript
   const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})


```

## Projects-02 : BMI Calculator
### Solution Code:
```Javascript
  
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
       e.preventDefault();
       const height = parseInt(document.querySelector('#height').value)
       const weight = parseInt(document.querySelector('#weight').value)

      const results =  document.querySelector('#results')
      const status = document.querySelector('#status')

      if(height ==='' || height < 0 || isNaN(height)){
       results.innerHTML = ` Please Enter Valid Height, ${height}`
      }else if(weight === '' || weight<0 || isNaN(weight)){
       results.innerHTML = ` Please Enter Valid Weight, ${weight}`
      }else{
       const bmi = (weight/ ((height*height)/10000)).toFixed(2);
       results.innerHTML=`<span>BMI: ${bmi}</span>`

       if( 18.6 > bmi){
             status.innerHTML = `<span>Condition- Under Weight</span>`
       }else if(18.6 < bmi && bmi < 24.9){
              status.innerHTML = `<span>Condition- Normal Weight</span>`
       }else{
              status.innerHTML = ` <span>Condition- Over weight</span>`
       }
       
      }

})



```

## Project-03: Digital Clock
### Solution Code:
```Javascript

 const clock = document.getElementById('clock')
// const clock= document.querySelector('#clock')
setInterval(function(){
       let date = new Date();
       const time = date.toLocaleTimeString();
       clock.innerHTML=time;
},1000)

```

## Project-04: Guessing Number

### Solution code: 
```Javascript
  let randomNumber = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainChance = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter Valid Number');
  } else if (guess > 100) {
    alert('Please Enter Number less Than 100');
  } else if (guess < 0) {
    alert('Please Enter Number Greater Than 0');
  } else {
    prevGuess.push(guess);

    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was :${randomNumber}`);
      endGame(guess);
      
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congrates! You guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guess is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remainChance.innerHTML = `${11 - numGuess}`;
}

function displayMessage(Msg) {
  lowOrHigh.innerHTML = `<h2>${Msg}</h2>`;
}

function endGame(Guess) {
  console.log(Guess)
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New game</h2>`;
  startOver.appendChild(p);
  
  playGame = false;

  newGame();
}

function newGame() {

  const newgame = document.querySelector('#newgame')
  newgame.addEventListener('click', function(e){

    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remainChance.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

  })
  
}


```

## Project-05: Unlimited color

### Solution code-

```javascript

const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())

let intervalId;

const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function () {

  if(!intervalId){
       intervalId = setInterval(changeBgColor,1000)
  }
};

Start.addEventListener('click', startChangingColor);

const stopChangingColor = function () {
   clearInterval(intervalId);
   intervalId = null;
};
Stop.addEventListener('click', stopChangingColor);



```

## Project -06 : Keyboard

### solution code
```Javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
   
    insert.innerHTML = `
    <div class = "class">
    
    <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
    </div>`;

})
    
```