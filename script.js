//PSEUDO CODE

//Give confirm asking if you want to play rock paper scissors
//Give prompt to enter R P or S
//give alert telling you you lost or won
//give confirm telling you score and asking if you want to play again

//declaring variables
const options = ["R", "P", "S"]



onload = game();

function game () {
    var invite = confirm("Would you like to play rock paper scissors?");
    if (invite = true) {
        console.log("I would like to play")
    } else {
        confirm("Sorry, you don't get a choise.  You HAVE to play!")
    }

    var choice = prompt('Type "R" for rock, "P" for paper and "s" for scissors')
}