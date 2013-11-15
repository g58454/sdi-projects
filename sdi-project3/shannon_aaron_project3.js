//alert("JavaScript works!");

//Aaron Shannon
//1311
//Project 3

//Declaring my global variables

var levelName = "Grown Over";
var lifeMeter = 100;
var playerStart = false;
var enemyCount = 0;
var returnedValue = new Array();
var playerStart = confirm("Are you ready to start?");


//Defining function to be called later
/*First function allows for a number of enemies to be assosiated with a local variable
depending on the input from the user
*/

var startFunction = function (){
    if (playerStart != false) {
        //code
        alert("You're ready do go!");
        return playerStart;
    }else{
        for (var lifeCount = 3; playerStart === false; lifeCount--) {
        //code
         playerStart = confirm("Are you sure?")
        }
    }
    
}


var levelEasy = function(){
    if (levelDifficulty === "Easy") {
        //code
        console.log("You chose " + levelDifficulty);
        return levelDifficulty;
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
        return levelDifficulty;
    }else{
        levelHard(levelDifficulty);
    }
}

//Just like levelMedium, levelHard is another function that is called from the other function

var levelHard = function(){
    if (levelDifficulty === "Hard") {
        //code
        console.log("You chose " + levelDifficulty);
        return levelDifficulty;
    }else{
        alert("You must be a scardy cat");
        return levelDifficulty = ("Didn't pick a level!")
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
            return lifeMeter = 0;
    }else{
        console.log("Go home!")
    }
}

/*This is a function that will use a predetermined array and will tell you how many 
enemies the player will have fought on the level difficulty*/

var enemyCount = function(){
    
    if (levelDifficulty === "Easy") {
        var enemyCount = [17,27,59];//code
        var x = enemyCount.splice(2,1);
        return levelDifficulty = x;
    }else{
        if (levelDifficulty === "Medium") {
            //code
            var enemyCount = [17,27,59];//code
            var x = enemyCount.splice(1,1);
            return levelDifficulty = x;
        }else{
            if (levelDifficulty === "Hard") {
                //code
                var enemyCount = [17,27,59];//code
                var x = enemyCount.splice(0,1);
                return levelDifficulty = x;
            }else{
                return levelDifficulty = 0;
            }  
        }
    }
}


//Calling functions in proper order with the proper arguments

startFunction(playerStart);

var levelDifficulty = prompt("What Level do you want?\nEasy, Medium, or Hard?");

levelEasy(levelDifficulty);
returnedValue[0]= levelDifficulty;


battleDamage(lifeMeter);
returnedValue[1]= lifeMeter;


enemyCount(levelDifficulty);
returnedValue[2]= levelDifficulty;

alert("You chose " + returnedValue.splice(0,1) + "\nYou're health is at " + returnedValue.splice(0,1) + "\nYou fought " + returnedValue.splice(0,1) + " enemies");

//alert(lifeMeter);
//alert(levelDifficulty);