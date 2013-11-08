//alert("JavaScript works!");

//Aaron Shannon
//SDI 1311
//Project 2

//My Variables




//My Procedure function
var firstStage = function() {
    if (sporePrompt == "y") {
        //a simple yes or no prompt
        console.log("Please proceed.");
    }else{
        console.log("Ok well there's no use. I guess you are just not ready for this!");
        
    }
}



//Boolean Function
var secondStage = function(){
    while (sporeNext !== true) {
        //test the boolean respnose using a while loop
        var sporeNext = confirm("Just push 'OK'");
        return sporeNext;
        }
}

var thirdStage = function(){
    for (var sporeLvl = lvlPrompt; sporeLvl < 26; sporeLvl++) {
        //code
        alert("Congratulations!!! You now at level: " + sporeLvl);
        return sporeLvl;
    }
    
    
    
}

var fourthStage = function(){
    var firstName = prompt("What is your spore's first name?");
    var lastName = prompt("What is your spore's last name?");
    var wholeName = firstName.concat(" " + lastName);
    return wholeName;
}

//main code
var sporePrompt = prompt("Would you like to start this? Y/N");

firstStage(sporePrompt);

sporeNext = confirm("With formalities out of the way are we ready to move on?");

secondStage(sporeNext);

var lvlPrompt = prompt ("What level are you?");

thirdStage(lvlPrompt);

fourthStage();

console.log("You said it is " + sporeNext + ", that you are ready to level");
console.log("You are now at level: " + sporeLvl);
console.log("You named your spore :: " + wholeName);


