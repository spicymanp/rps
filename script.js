console.log("JavaScript file has been loaded! Yipee!"); // just so I know this is even loading...


// connect to html elements here 
const playerName = ducment.getElementById("player-name");
const dropdown = document.getElementById("player-selection-dropdown")
const displayPlayerSelection = document.getElementById("current-selection");
// rest of my code 


function changeStuff() {
    const selectedMove = dropdown.options[dropdown.selectedIndex].text;
    console.log(selectedMove);
    displayPlayerSelection.textContent = selectedMove;
    console.log('something is happening');
}

dropdown.addEventListener('change', function() {
    console.log("heeeeeeeeeeeeee");
    changeStuff();
})


// functions and functionality needed 
// set player name
// get / set player scores (including computer player(cp)
// game logic - random rolls for cp and comparing results between player selection and computers selection.
// update html elements using even listeners

