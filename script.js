
// prompt user for input choice
// var user_input = prompt("r, p, s");

// array of computer's choices
var comp_choice = ["r", "p", "s"];

// create array with winning conditions
var win_con = ["rs", "sp", "pr"];

// create wins/draws/losses counter variable - initialised to 0
var stats = [0, 0, 0];
console.log(stats);

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
    console.log(result);

    // check if player won
    for (j = 0; j < win_con.length; j++) {
        if (result === win_con[j]) {
            stats[0] += 1;
            console.log(stats);
            console.log("win");
        }
    }

    // check if player drew
    if (user_input === comp_move) {
        stats[1] += 1;
        console.log(stats);
        console.log("draw");
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
// to dev console
console.log (stats_end);
// to end user
alert(stats_end);


console.log(total_games);





// unlooped old new code

// // computer's choice
// comp_move = comp_choice[getRandomInt(win_con.length)];

// // merge user input, ui, with computer choice
// var result = user_input + comp_move;
// console.log(result);

// // check if player won
// for (i = 0; i < win_con.length; i++) {
//     if (result === win_con[i]) {
//         stats[0] += 1;
//         console.log(stats);
//     }

// }

// // check if player drew
// if (user_input === comp_move) {
//     stats[1] += 1;
//     console.log(stats);
// }














// old random code

// compare merged result, r, with  winning conditions in a for loop
// for ( i = 0; i < wc.length; i++) {
//     console.log("for loop work")
//     console.log(wc[i])
//     if (r == wc[i]) {
//         console.log("if works");
//         alert("you win");
//     }

//     else if (ui === cc) {
//     console.log(r);
//     alert("draw");
//     }

//     else {
//         console.log("else works");
//         alert("you lose")
//     }
// }

//

    // else if ( ui === cc) {
    //     stats[1] += 1;
    //     console.log(stats[1]);
    // }
    // else {
    //     stats[2] += 1;
    //     console.log(stats[2]);
    // }