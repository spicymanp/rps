console.log('JavaScript file has been loaded! Yipee!'); // just so I know this is even loading...


// connect to html elements here 
const playerName = document.getElementById('player-name');
const dropdown = document.getElementById('player-selection-dropdown')
const player1Selection = document.getElementById('player1-current-selection');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
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

    player1Selection.textContent = 'nothing';
    player2Selection.textContent = 'nothing';
    draws.textContent = 'Draws: 0';
    rounds.textContent = 'Rounds: 0';
    score.textContent = 'Score : 0';

    populateDropdown();

}

function resetDropdown() {

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
    for (let key in rps) {
        if (Object.hasOwn(rps, key)) {
            let option = document.createElement('option');
            option.value = key;
            option.textContent = rps[key];
            dropdown.appendChild(option);
        }
    }
    dropdown.value = 0;
}

function setPlayer1Selection() {
    const selectedMove = dropdown.options[dropdown.selectedIndex].text;
    if (selectedMove === 'Select an option!') {
        alert('Please select your next move.');
        return false;
    } else {
        player1Choice = selectedMove;
        player1Selection.textContent = player1Choice;
        return true;
    }
}

function getPlayer2Selection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    player2Choice = rps[randomNumber];
    return player2Choice;
}

function setPlayer2selection() {
    player2Selection.textContent = getPlayer2Selection();
}

function checkResults(p1, p2) {

    if (p1 === p2) {
        drawCount++;
        draws.textContent = 'Draws: ' + drawCount;
        console.log("it's a draw");
        console.log('outcomes[p1].beats' + ' ' + outcomes[p1].beats);
    }
    else if (outcomes[p1].beats === outcomes[p2].losesTo) {
        console.log('p1 wins the round!');
        player1Score++;
    } else {
        console.log('p2 wins the round!');
        player2Score++;
    }
    return score.textContent = `Score : ${player1Score} | ${player2Score}`;
}


function countTheRound() {
    roundCount++;
    rounds.textContent = 'Rounds: ' + roundCount;
}

//const setScore = (winnerOfRound) => winnerOfRound === 'player1' ? player1Score++ : player2Score++;

function checkScore(player1Score, player2Score) {
    if (player1Score === 3) {
        alert('Player 1 Wins!');
        resetValues();
        return;
    } else if (player2Score === 3) {
        alert('Player 2 Wins!');
        resetValues();
        return;
    }
}


dropdown.addEventListener('change', function () {
    setPlayer1Selection();
})

playButton.addEventListener('click', () => {
    if (!setPlayer1Selection()) {
        return;
    }
    setPlayer1Selection();
    getPlayer2Selection();
    setPlayer2selection();

    console.log('p1 : ' + player1Choice + ' : ' + typeof (player1Choice));
    console.log('p2 : ' + player2Choice + ' : ' + typeof (player2Choice));

    checkResults(player1Choice, player2Choice);
    checkScore(player1Score, player2Score);
    countTheRound();
})



resetButton.addEventListener('click', () => {
    console.log('clicking the reset button');
    resetValues();
})


populateDropdown();









// functions and functionality needed
// set player name
// get / set player scores (including computer player(cp))
// game logic - random rolls for cp and comparing results between player selection and computers selection.
// update html elements using even listeners

