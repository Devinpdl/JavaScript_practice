let randomNumber = parseInt(Math.random()*100+1);
const userInput= document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const userguessed = document.querySelector('.yourprevguesses');
const remaining = document.querySelector('.attemptsremain');
const lowOrHigh = document.querySelector('.loworHigh');
const startOver= document.querySelector('.resultparameters');

const p = document.createElement('p');

let prevguess=[];
let numofGuesses=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(userInput.value.trim()===''){
        alert("Please Enter a Number!");
    }
    else if(isNaN(guess)){
        alert("That's not a number! Please enter a Valid Number");
    }
    else if(guess<1 || guess>100){
        alert(`Sorry, please enter a number between 1 and 100!`);
    }

    else {
        prevguess.push(guess);
        showUserGuess(guess);
        CleanUpGuess(guess);
    }
    if(numofGuesses>10){
        displayMessage(`Game Over. The Random number was: ${randomNumber}`);
        endgame();
    }
}

function showUserGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right Dear!`)
    }
    else if(guess<randomNumber){
        displayMessage(`Your guess is too Low!`);
    }
    else if(guess>randomNumber){
        displayMessage(`Your guess is too High!`);
    }
}
function CleanUpGuess(guess){
    userInput.value='';
    userguessed.innerHTML= userguessed.innerHTML + `${guess}, `;
    numofGuesses++;
    remaining.innerHTML=`${11-numofGuesses}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2> ${message} </h2>`;
}

// Function to stop the game when no more attempts left
function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML='<h2 id="newgame">Click here to start a New Game</h2>';
    startOver.appendChild(p);
    playGame=false;
    newgame();
}

function newgame(){
    const newGameButton=document.querySelector('#newgame');
    // Event Listener for clicking on "New Game" button
    newGameButton.addEventListener("click", function(e){
        e.preventDefault();
        randomNumber= parseInt(Math.random()*100+1);
        numofGuesses=1;
        prevguess=[];
        userguessed.innerHTML='';
        remaining.innerHTML=`${11-numofGuesses}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML='';
        playGame=true;
});
}
