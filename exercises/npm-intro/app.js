var readlineSync = require("readline-sync");
// Wait for user's response.
var userNameFirst = readlineSync.question('Hello! my name is Stephan. Help me get to know you! \n\n' + "What is your first name? ");
var userNameLast = readlineSync.question("and your last name? ");

console.log(`\n Cool nice to meet you ${userNameFirst.toLocaleUpperCase()} !`);

var age = readlineSync.question("I am 23 years. What's your age? ");

console.log(`\nWow so far I know your name is ${userNameFirst} ${userNameLast.toLocaleUpperCase()} and your age is ${age} !`);

var background = readlineSync.question("\nGive me a short background about you and I will tell you what I remember: ");

console.log(`\nSo the Info you gave me is ${background.length} characters long \n This is the last half: \n  ${background.substr((background.length/2), (background.length))}`);

var startBackground = readlineSync.question("\n Would you like me to start somwhere else in your Info? choose a number between [0-" + background.length + "]: ");

console.log(`\nHere you go:  \n  ${background.substr((startBackground), (background.length))}`);
 
