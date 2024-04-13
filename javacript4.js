let randomNumber = parseInt(Math.random() * 100 + 1)
const form = document.querySelector('#subt');
const userinput = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const resultparas = document.querySelector('.resultParas');
let playgame = true;
let prevguess = [];
let numguess = 0;
let p = document.createElement('p');

if(playgame) {
    form.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validate(guess);
    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1');
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevguess.push(guess);
        if (numguess === 10) {
            displayguess(guess);
            loworhi.innerHTML = `<h2>You are out of guesses!! The number was ${randomNumber}</h2>`;
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function displayguess(guess) {
    userinput.value = '';
    guesses.innerHTML += `${guess} ,`;
    numguess++;
    remain.innerHTML = `${10 - numguess}`;
}
function checkguess(guess) {
    if (guess === randomNumber) {
        loworhi.innerHTML = `<h2>You Win!!</h2>`;
        endgame();
    }
    else if (guess < randomNumber) {
        loworhi.innerHTML = `<h2>Value is low</h2>`;
    }
    else {
        loworhi.innerHTML = `<h2>Value is high</h2>`;
    }
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.innerHTML = `<h1 id="NewGame">Start New Game</h1>`;
    resultparas.appendChild(p);
    playgame = false;
    newgame();
}


function newgame() {
    const x = document.querySelector('#NewGame');
    x.addEventListener('click', function (e) {
        numguess = 0;
        loworhi.innerHTML = ''
        guesses.innerHTML = '';
        remain.innerHTML = `${10 - numguess}`;
        userinput.removeAttribute('disabled');
        resultparas.removeChild(p);
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevguess = [];
        playgame = true;
    })

}








// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

