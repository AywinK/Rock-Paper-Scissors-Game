
// array of computer's choices
var comp_choice = ["r", "p", "s"];

// create array with winning conditions
var win_con = ["rs", "sp", "pr"];

// create wins/draws/losses counter variable - initialised to 0
var stats = [0, 0, 0];

// number of games to be played
var games_n = 10;

// number of games played - initialise
var total_games = 0;

// random generator function from mdn web docs
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// loops of games
for (i = 1; i <= games_n; i++) {

    // prompt user for input choice
    user_input = prompt("r, p, s");

    // computer's choice
    comp_move = comp_choice[getRandomInt(win_con.length)];

    // merge user input with computer's move
    var result = user_input + comp_move;

    // check if player won
    for (j = 0; j < win_con.length; j++) {
        if (result === win_con[j]) {
            stats[0] += 1;
        }
    }

    // check if player drew
    if (user_input === comp_move) {
        stats[1] += 1;
    }

    // count number of games played
    total_games = ++total_games;

    // play again?
    if (!confirm("play again? press ok")) {
        break
    }

}

// calculate losses
stats[2] = total_games - stats[0] - stats[1];

// show stats
stats_end = ("      wins: " + stats[0] + "      ties: " + stats[1] + "      losses: " + stats[2]);

// to end user
alert(stats_end);
