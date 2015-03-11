/**
 * Created by Alpha on 15-03-10.
 */
//1-using alert function welcome the user to your website
alert("Welcome to my Website");

//2-Using prompt function, ask user his/her age and record value in a variable using an appropriate name

var yourAge =prompt("What is your age?");

//2record username in a variable using appropriate name
// Using console.log, announce the age of the user, using the previous variable

var yourName=prompt("what is your name");
console.log(yourName + "" + "is" + yourAge + "years + old");


//3-Ask user to enter a number between 1 and 100. If is is correctly done, use alert function to say "thank you".
//If yourNumber is not between 1 and 100 announce "bad entry"; if > 100 and if < 0 use alert function to announce "bad entry".

var yourNumber = prompt("Enter a number between 1 and 100");
if(yourNumber >= 100) {
    alert("bad entry")
} else if(yourNumber <= 0){
    alert("bad entry")
} else {
    alert("thank you")
}

//partie 5-record a number value(numberValue) between 1 AND 100 in a variable.
//Using prompt, ask user to guess the number.
//If guess is not between 1 AND 100, announce "bad entry" and end program;
//If guess === numberValue, announce "you have found the correct number";
//If guess is a value between 1 and 100 that is smaller than numberValue, announce "your number is too small"
//If guess is a value between 1 and 100 that is higher than numberValue, annnounce "your number is too big"

var numberValue = 60;
var guess = +prompt("Guess a number between 1 and 100?");
if (guess >= 100) {
    alert("Bad Entry");
}else if(guess <= 0){
    alert("Bad Entry")
}
 //end program

if (guess === numberValue) {
    alert("Your have found the correct number");
}
else if (guess < numberValue) {
    alert("Your number is too small");
}
else {
    alert("Your number is too big");
}

//Using a counter give the user 5 chances to find the number.

var counter =  1;
while( (guess != numberValue) && (counter <= 5) ) {
    guess = prompt("Guess the number?");
    counter = counter + 1;
    if (counter === 5) {
        alert("GAME OVER");
    }
}