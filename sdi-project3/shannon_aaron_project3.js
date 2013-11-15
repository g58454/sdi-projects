//alert("JavaScript works!");

//Aaron Shannon
//1311
//Project 3

//Declaring my global variables

var levelName = "Grown Over";
var lifeMeter = 100;
var levelDifficulty = prompt("What Level do you want?\nEasy, Medium, or Hard?");
var playerDead = false;



//Defining function to be called later
/*First function allows for a number of enemies to be assosiated with a local variable
depending on the input from the user
*/

var levelEasy = function(){
    if (levelDifficulty === "Easy") {
        //code
        console.log("You chose " + levelDifficulty);
    }else{
        levelMedium(levelDifficulty);
    }
}



/*In addition to the same set up as the levelEasy, this is a function that is called upon
when the string isn't met from the previous function*/

var levelMedium = function(){
    if (levelDifficulty === "Medium") {
        //code
        console.log("You chose " + levelDifficulty);
    }else{
        levelHard(levelDifficulty);
    }
}

//Just like levelMedium, levelHard is another function that is called from the other function

var levelHard = function(){
    if (levelDifficulty === "Hard") {
        //code
        console.log("You chose " + levelDifficulty);
    }else{
        alert("You must be a scardy cat");
    }
}



//This is a for loop that keeps the player battling.
var battleDamage = function(){
    alert("Your Health is at " + lifeMeter);
    var fightStatus = confirm("Would you like to battle?");
    if (fightStatus === true) {
        //code
        while (lifeMeter, lifeMeter >= 0, lifeMeter--){
            //code
            console.log("Your health is now " + lifeMeter);
        }
    }else{
        console.log("Go home!")
    }
}



//Calling functions in proper order with the proper arguments
levelEasy(levelDifficulty);
battleDamage(lifeMeter);