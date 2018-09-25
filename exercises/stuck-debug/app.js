var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option !== options[2]){
  ask.keyInSelect(options, "What would you like to do today?: ");
  if(option === options[0]){
    console.log("You pick some flowers. You make a bouquet.");
    continue;
  } else {
    console.log("You shoot guns.");
    continue;
  }
}

console.log("You fought a bear and got beat up!");
