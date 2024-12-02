console.log('JavaScript file has been loaded! Yipee!'); // just so I know this is even loading...


// connect to html elements here 
const playerName = document.getElementById('player-name');
const p1Icon = document.getElementById('p1-icon');
const p2Icon = document.getElementById('p2-icon');
const buttons = document.querySelectorAll('#btn-div > button')

// const playButton = document.getElementById('play-btn');
// const resetButton = document.getElementById('reset-btn');
//const score = document.getElementById('game-score');
const draws = document.getElementById('draws-score');
const rounds = document.getElementById('rounds');

// variables

let p1Health = 3;
let p2Health = 3;
let player1Choice = '';
let player2Choice = '';
let drawCount = 0;
let roundCount = 0;
const isReversed = false;

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

const icons = {
    Rock: './assets/rock.png',
    Paper: './assets/paper.png',
    Scissors: './assets/scissors.png',
}

// const healthBar = {
//     0: 'class="empty-health-block"',
//     1: 'class="health-block'
// }

// functions 

function resetValues() {
    p1Health = 3;
    p2Health = 3;
    player1Choice = '';
    player2Choice = '';
    drawCount = 0;
    roundCount = 0;
    p1Icon.src = '';
    p2Icon.src = '';

    draws.textContent = `Draws: ${drawCount}`;
    rounds.textContent = `Rounds: ${roundCount}`;
    score.textContent = 'Score : 0';

    for (const btn of buttons) {
        btn.classList.remove('is-warning');
    }
}


function setPlayerSelection(selection, player) {
    if (icons[selection] && player === 'p1') {
        p1Icon.src = icons[selection]
        // ! p1Icon.alt = ???[selection];    set an alt tag for each image as well.
    } else {
        p2Icon.src = icons[selection];
    }
}

function getPlayer2Selection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    player2Choice = rps[randomNumber];
    setPlayerSelection(player2Choice);
}


// function toggleButtonSelection(btnDivId) {
//     for (const btn of buttons) {
//         btn.addEventListener('click', () => {
//             if (btn.classList.contains('is-warning')) {
//                 btn.classList.remove('is-warning');
//                 player1Choice = '';
//                 p1Icon.src = '';
//                 console.log(`Player 1 Choice : ${player1Choice}`);
//             } else {
//                 for (const item of buttons) {
//                     item.classList.remove('is-warning');
//                 }
//                 btn.classList.add('is-warning');
//                 player1Choice = btn.textContent.trim();
//                 setPlayerSelection(player1Choice, 'p1');
//                 console.log(`Player 1 Choice : ${player1Choice}`);
//                 //! setPlayer1Selection(player1Choice);
//             }
//         });
//     }
// }


function checkResults(p1, p2) {

    if (p1 === p2) {
        drawCount++;
        draws.textContent = `Draws: ${drawCount}`;
        console.log("it's a draw");
        console.log(`${outcomes[p1].beats} ${outcomes[p1].beats}`);
    }
    else if (outcomes[p1].beats === outcomes[p2].losesTo) {
        console.log(`outcomes[p1] : ${outcomes[p1]}`);
        console.log(`outcomes[p1].beats : ${outcomes[p1].beats}`);
        console.log(`outcomes[p1].losesTo : ${outcomes[p1].losesTo}`);

        console.log(`outcomes[p2] : ${outcomes[p2]}`);
        console.log(`outcomes[p2].beats : ${outcomes[p2].beats}`);
        console.log(`outcomes[p2].losesTo : ${outcomes[p2].losesTo}`);

        console.log('p1 wins the round!');
        p2Health--;
    } else {
        console.log('p2 wins the round!');
        p1Health--;
    }
    score.textContent = `Score : ${p1Health} | ${p2Health}`;

}


function countTheRound() {
    roundCount++;
    rounds.textContent = `Rounds: ${roundCount}`;
}


function checkScore(player1Score, player2Score) {
    if (player1Score === 0) {
        alert('Player 2 Wins!');
        resetValues();
    } if (player2Score === 0) {
        alert('Player 1 Wins!');
        resetValues();
    }
}

function populateHealthBar(playerHealth, playerId, isReversed) {
    const healthBlocks = document.querySelectorAll(`#${playerId} > div`);
    console.log("Health Passed:", playerHealth, playerId); // Debugging step

    // Loop through all health blocks
    healthBlocks.forEach((block, index) => {

        const fillCondition = isReversed ? index >= healthBlocks.length - playerHealth : index < playerHealth;

        if (fillCondition) {
            // Full blocks for health within the range
            block.classList.add('full-health-block');
            block.classList.remove('empty-health-block');
        } else {
            // Empty blocks for health outside the range
            block.classList.add('empty-health-block');
            block.classList.remove('full-health-block');
        }
    });
}

// playButton.addEventListener('click', () => {
//     console.log('player1Choice');
//     if (player1Choice === '') {
//         return alert("Please choose your next move.")
//     }

//     getPlayer2Selection();

//     console.log(`p1 : ${player1Choice} typeof (${player1Choice})`);
//     console.log(`p2 : ${player2Choice} typeof (${player2Choice})`);

//     checkResults(player1Choice, player2Choice);
//     checkScore(p1Health, p2Health);
//     countTheRound();
// })



// resetButton.addEventListener('click', () => {
//     console.log('clicking the reset button');
//     resetValues();
// })


// ! toggleButtonSelection(buttons);
populateHealthBar(p1Health, 'p1-health');
populateHealthBar(p2Health, 'p2-health', true);









//  ! tailwindcss
//  ! bulma.io
//  ! Supabase
//  ! express node
//  ! postcss
// ! supabase.com
// ! expressjs.com
// ! https://www.npmjs.com/package/canvas-confetti
// ! https://github.com/tsparticles/tsparticles?tab=readme-ov-file#usage
// ! https://www.rapidtables.com/web/css/css-color.html
// ! getbootstrap.com


// starts immediately after clicking start (in modal) player gets a few moments to make their choice.
// bigger annimations - cycle between rock, paper and scissors while player makes choice
// confetti after player 1 victory, something else after loss?
// set player name
// show a history of previous moves under player names

//  websockets (multiplayer)