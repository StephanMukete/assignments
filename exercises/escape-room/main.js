var rs = require("readline-sync");
var player = {
    name: "",
    hitPoints: 100,
    attackPower: 15,
    inventory: []
}

function Enemy(){
    var names = ["kings", "ada", "esoks", "clive", "sus", "eta"];
    var items = ["Potion", "Tinder Password", "key", "syphilis"];

    this.attackPower = [Math.floor(Math.random() * name.length)];
    this.hitPoints = Math.floor(Math.random() * 26 + 50);
    this.attackPower = Math.floor(Math.random() * 6 + 10);
}

player.name = rs.question("\nWelcome top RPG-land! What is your name?\n");

console.log("\nHello, " + player.name + "!\n");

var mainOptions = ["walk", "check stats"];

while(true){
    var choice = rs.keyInSelect(mainOptions, "\nYou may continue on your journey or view your player stats");
    if(choice === 0){
        var runsIntoEnemy = Math.random() < .333333;
        if(runsIntoEnemy){
            var Enemy = new Enemy();
            console.log("Oh no, an" + enemy.name + " appeared");

            var runs = rs.keyInYNStrict("\nDo you stand and fight?\n");
        }
        
    } else if(choice === 1){
        console.log(player);
        rs.question("\nPress any key to continue\n");
    }
}