//PSEUDO CODE

//Give confirm asking if you want to play rock paper scissors
//Give prompt to enter R P or S
//give alert telling you you lost or won
//give confirm telling you score and asking if you want to play again

//declaring variables
const options = ["R", "P", "S"];
let computerScore = [];
let userScore = [];
let tieScore = [];


onload = startup();

function startup () {
    var invite = confirm("Would you like to play rock paper scissors?");
    if (invite == false) {
        alert("Oh.. ok...");
        console.log("I don't want to play")
    } else {
        console.log("I would like to play");
        game();
    }
}
function game () {
    var choice = prompt('Type "R" for rock, "P" for paper and "S" for scissors');
    choice = choice.toUpperCase();
    if (choice != "R" && choice != "S" && choice != "P") {
        alert("Invalid Move!");
        game();
        return;
    }
    let random = options[Math.floor(Math.random()*3)];
    console.log("the computer chose " + random);
    console.log("you chose " + choice);

    if (choice == random) {
        alert("The computer chose " + random + "!  Its a tie!");
        tieScore.push(1);
        } else if (choice == "R" && random == "P") {
            alert("The computer chose " + random + "!  The computer won!");
            computerScore.push(1);
        } else if (choice == "P" && random == "S") {
            alert("The computer chose " + random + "!  The computer won!");
            computerScore.push(1);
        } else if (choice == "S" && random == "R") {
            alert("The computer chose " + random + "! The computer won!");
            computerScore.push(1);
        } else if (choice == "R" && random == "S") {
            alert("The computer chose " + random + "! Congrats! You won!");
            userScore.push(1);    
        } else if (choice == "P" && random == "R") {
            alert("The computer chose " + random + "! Congrats! You won!");
            userScore.push(1);    
        } else if (choice == "S" && random == "P") {
            alert("The computer chose " + random + "! Congrats! You won!");
            userScore.push(1);  
        }
    
    alert("Scoreboard:" + "\n" + "I won " + userScore.length + " times!" + "\n" + "The computer won " + computerScore.length + " times!" + "\n" + "There have been " + tieScore.length + " ties!");

    var rematch = confirm("Would you like to play again?");
        if (rematch == true) {
            console.log("I would like to play again!");
            game();
        } else {
            alert("Thanks for Playing!");
        }
    }

    console.log("I won " + userScore.length + " times!");
    console.log("The computer won " + computerScore.length + " times!");
    console.log("There have been " + tieScore.length + " ties!");