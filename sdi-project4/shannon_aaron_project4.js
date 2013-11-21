//alert("JavaScript works!");
//Aaron Shannon
//November 21, 2013 :: 1311
//Project 4

//Global String Variables
var numReturn;
var eMailReturn;
var urlReturn;
var phraseReturn;
var exReturn;
//Global Number Variables
var deciReturn;
var parReturn;





//Functions
//Matching phone number pattern
var phoneNumber = function (value){
    //local variables
    var areaCode = value.substring(0,value.indexOf("-"));
    var partOne = value.substring(value.indexOf("-")+1, value.lastIndexOf("-"));
    var partTwo = value.substring(value.lastIndexOf("-")+1, value.length);
    if (areaCode.length === 3) {
        //code
        //console.log("Area code checks out");
        if (partOne.length === 3) {
            //code
            //console.log("First part works too");
            if (partTwo.length === 4) {
                //code
                //console.log("The last part is a match!");
                return true;
            }else{
                return false;
            }
        }else{
          return false;  
        }
    }else{
        return false;
    }
}

//Matching email pattern Function
var eMail = function (value){
    if (value.contains("@") === true) {
        //
        //console.log("yep");
        if (value.endsWith(".com") === true) {
            //code
            return true;
        }else{
            return false
        }
    }else{
        return false;
    }
}

//Matching URL pattern Function
var webSite = function (value){
    if (value.startsWith("http:") === true) {
        //code
        return true;
    }else{
        if (value.startsWith("https:") === true) {
            //code
            return true;
        }else{
            return false;
        }
    }
}


//Making the first letter uppercase Function
var upperCase = function (value){
    var firstWord = value.slice(0,value.indexOf(" "));
    var secondWord = value.slice(value.indexOf(" ") + 1, value.length);
    var firstLetter = firstWord.substring(0,1).toUpperCase() + firstWord.substring(1);
    var secondLetter = secondWord.substring(0,1).toUpperCase() + secondWord.substring(1);
    return firstLetter + " " + secondLetter; 
}










//Number Functions
//Decimal Fixed Position Function
var deciPlace = function (value){
    return value.toFixed(2);
}

//Pasing String into Float Number Function
var strToNum = function (value){
    var paFl = parseFloat(value);
    return paFl;
}









//Main Code
//String Functions and Returns
numReturn = phoneNumber("281-355-5970");
console.log("This is a valid phone number: " + numReturn);

eMailReturn = eMail("ayren.shannon@me.com");
console.log("This is a valid email address: " + eMailReturn);

urlReturn = webSite("http://www.vgcats.com");
console.log("This is a valid URL: " + urlReturn);

phraseReturn = upperCase("aaron shannon");
console.log(phraseReturn);

//Number Functions and Returns
deciReturn = deciPlace(2.577777);
console.log("Your number is rounded to " + deciReturn);

parReturn = strToNum("42 is the answer to life's question");
console.log(parReturn);

