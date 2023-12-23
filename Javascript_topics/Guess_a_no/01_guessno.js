let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowerOrHigh');
const startOver = document.querySelector('.resultParameters');

const p = document.createElement('p');

let prevguess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // avoids returning value of the events back to server
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (userInput.value.trim() === '') {
        alert('Please enter a number!');
    } else if (isNaN(guess)) {
        alert('Please enter a valid number!');
    } else if (guess < 1 || guess > 100) {
        alert('Your entry is out of the range! Please enter a number between 1 and 100');
    } else {
        prevguess.push(guess);
        CleanUpGuess(guess);
        checkGuess(guess);
    } 

    if (numGuess > 10) {
        displayMessage(`Game Over, Random number was ${randomNumber}`);
        endgame();
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endgame();
    } else if (guess < randomNumber) {
        displayMessage('The number is too low that you guessed');
    } else if (guess > randomNumber) {
        displayMessage('The number is too high that you guessed');
    }
}

function CleanUpGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newgame"> Start new game </h2>';
    startOver.appendChild(p);
    playGame = false;
    newgame();
}

function newgame() {
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        lowOrHigh.innerHTML='';
        startOver.removeChild(p);
        playGame = true;
    });
}
