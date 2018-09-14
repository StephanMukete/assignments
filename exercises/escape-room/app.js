var readlineSync = require("readline-sync");

var options = ["look around", "open door", "put hand in hole"];
var hasKey = false;
while(true){
    var selection = readlineSync.keyInSelect(options, "You find yourself in a dark room with a wall, a dark hole in the wall, and a strage smell. What do you do next?");
    if(selection === 1){
        console.log("You look around and see a shiny object on the ground");
        var picksUp = readlineSync.keyInYNStrict("Did you pick it up?\n");
        if(picksUp){
            console.log("You found a key");
            hasKey = true;
        }
    }
}