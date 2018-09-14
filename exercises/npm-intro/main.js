var readlineSync = require("readline-sync");
var operations = require("./operations.js");

var num1 = parseInt(readlineSync.question("Enter your first number: "));
var num2 = parseInt(readlineSync.question("Enter your second number: "));

var options = ["+", "-", "/", "*"];
var index = readlineSync.keyInSelect(options, "Which operation would you like to perform?");
if (options[index] === "+") console.log(`Your result is: ${operations.sum(num1,num2)}`);
if (options[index] === "-") console.log(`Your result is: ${operations.subtract(num1,num2)}`);
if (options[index] === "*") console.log(`Your result is: ${operations.multiply(num1,num2)}`);
if (options[index] === "/") console.log(`Your result is: ${operations.divide(num1,num2)}`);