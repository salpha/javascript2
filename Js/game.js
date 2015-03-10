/**
 * Created by Alpha on 15-03-10.
 */
//using alert function welcome the user to your website
alert("Welcome to my Website");

//Using prompt function, ask user his/her age and record value in a variable using an appropriate name

var yourAge =prompt("What is your age?");

//record username in a variable using appropriate name
// Using console.log, announce the age of the user, using the previous variable

var yourName=prompt("what is your name");
console.log(yourName + "is" + yourAge + "years + old");


//Ask user to enter a number between 1 and 100. If is is correctly done, use alert function to say "thank you".
//If yourNumber is not between 1 and 100 announce "bad entry"; if > 100 and if < 0 use alert function to announce "bad entry".

var yourNumber = prompt("Enter a number between 1 and 100");
if(yourNumber >= 100) {
    alert("bad entry")
} if(yourNumber <= 0){
    alert("bad entry")
} else {
    alert("thank you")
}
