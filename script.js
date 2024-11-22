console.log('JavaScript file has been loaded! Yipee!'); // just so I know this is even loading...


// connect to html elements here 
const playerName = document.getElementById('player-name');
//const dropdown = document.getElementById('player-selection-dropdown')
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const player1Selection = document.getElementById('player1-current-selection');
const playButton = document.getElementById('play-btn');
const resetButton = document.getElementById('reset-btn');
const player2Selection = document.getElementById('player2-current-selection')
const score = document.getElementById('game-score');
const draws = document.getElementById('draws-score');
const rounds = document.getElementById('rounds');

// variables

let player1Score = 0;
let player2Score = 0;
let player1Choice = '';
let player2Choice = '';
let drawCount = 0;
let roundCount = 0;

const rps = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
}

const outcomes = {
    Rock: { beats: 'Scissors', losesTo: 'Paper' },
    Paper: { beats: 'Rock', losesTo: 'Scissors' },
    Scissors: { beats: 'Paper', losesTo: 'Rock' }
}

// functions 

function resetValues() {
    player1Score = 0;
    player2Score = 0;
    player1Choice = '';
    player2Choice = '';
    drawCount = 0;
    roundCount = 0;

    player1Selection.textContent = '';
    player2Selection.textContent = '';
    draws.textContent = 'Draws: 0';
    rounds.textContent = 'Rounds: 0';
    score.textContent = 'Score : 0';


}


/*function resetDropdown() {

    dropdown.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '0';
    defaultOption.textContent = 'Select an option!';
    defaultOption.disabled = true;
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    dropdown.appendChild(defaultOption);
}

function populateDropdown() {

    resetDropdown();
    for (const key in rps) {
        if (Object.hasOwn(rps, key)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = rps[key];
            dropdown.appendChild(option);
        }
    }
    dropdown.value = 0;
} 
*/

function setPlayer1Selection(player1Choice) {
    if (player1Selection.textContent === '') {
        buttonActive(player1Choice);
    } else {
        player1Selection.textContent = '';
    }
    console.log(player1Choice);
    return true;

}

function getPlayer2Selection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    player2Choice = rps[randomNumber];
    return player2Choice;
}

function setPlayer2selection() {
    player2Selection.textContent = getPlayer2Selection();
}

function buttonActive(player1Choice) {

    if (player1Choice === 'Rock') {
        rockButton.classList.toggle("is-warning");
        paperButton.classList.remove('is-warning');
        scissorsButton.classList.remove("is-warning");
    } else if (player1Choice === 'Paper') {
        paperButton.classList.toggle("is-warning");
        rockButton.classList.remove('is-warning');
        scissorsButton.classList.remove('is-warning');
    } else {
        scissorsButton.classList.toggle("is-warning");
        paperButton.classList.remove('is-warning');
        rockButton.classList.remove('is-warning');
    }
}

function checkResults(p1, p2) {

    if (p1 === p2) {
        drawCount++;
        draws.textContent = `Draws: ${drawCount}`;
        console.log("it's a draw");
        console.log(`${outcomes[p1].beats}' ${outcomes[p1].beats}`);
    }
    else if (outcomes[p1].beats === outcomes[p2].losesTo) {
        console.log('p1 wins the round!');
        player1Score++;
    } else {
        console.log('p2 wins the round!');
        player2Score++;
    }
    score.textContent = `Score : ${player1Score} | ${player2Score}`;
    return score.textContent;
}


function countTheRound() {
    roundCount++;
    rounds.textContent = `Rounds: ${roundCount}`;
}

//const setScore = (winnerOfRound) => winnerOfRound === 'player1' ? player1Score++ : player2Score++;

function checkScore(player1Score, player2Score) {
    if (player1Score === 3) {
        alert('Player 1 Wins!');
        resetValues();
        return;
    } if (player2Score === 3) {
        alert('Player 2 Wins!');
        resetValues();
        return;
    }
}

// dropdown.addEventListener('change', () => setPlayer1Selection());

rockButton.addEventListener('click', () => {
    player1Choice = "Rock";
    setPlayer1Selection('Rock');
});

paperButton.addEventListener('click', () => {
    player1Choice = "Paper";
    setPlayer1Selection('Paper');
});

scissorsButton.addEventListener('click', () => {
    player1Choice = "Scissors";
    setPlayer1Selection('Scissors');
});



playButton.addEventListener('click', () => {
    console.log('player1Choice');
    if (player1Choice === '') {
        return alert("Please choose your next move.")
    }
    //setPlayer1Selection();
    getPlayer2Selection();
    setPlayer2selection();

    console.log(`p1 : ${player1Choice} typeof (${player1Choice})`);
    console.log(`p2 : ${player2Choice} typeof (${player2Choice})`);

    checkResults(player1Choice, player2Choice);
    checkScore(player1Score, player2Score);
    countTheRound();
})



resetButton.addEventListener('click', () => {
    console.log('clicking the reset button');
    resetValues();
})


// populateDropdown();









// functions and functionality needed
// set player name
// get / set player scores (including computer player(cp))
// game logic - random rolls for cp and comparing results between player selection and computers selection.
// update html elements using even listeners

// websockets (multiplayer)

// ! tailwindcss
// ! bulma.io
