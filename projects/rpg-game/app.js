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
    this.nam = ["kings", "ada", "esoks", "clive", "sus", "eta"];
    // this.attackPower = [Math.floor(Math.random() * names.length)];
    this.hitPoints = Math.floor(Math.random() * 26 + 50);
    this.enemyAttackPower = Math.floor(Math.random() * 10 + 1);
}

player.name = rs.question("\nWelcome top RPG-land! What is your name?\n");

console.log("\nHello, " + player.name + "!\n");

var mainOptions = ["walk", "check stats"];

while(true){
    var choice2 = rs.keyIn('walk or check stats? ', {limit: 'wc'});
    //var choice = rs.keyInSelect(mainOptions, "\nYou may continue on your journey or view your player stats");
    if(choice2 === "w"){
        // console.log("walk")
        var runsIntoEnemy = Math.floor((Math.random() * 5 )+ 1) ;
        // var runsIntoEnemy = ((Math.random() * 6 )+ 1) ;//< .333333;
         if(runsIntoEnemy){
            var enemy = new Enemy();
            
            console.log("Oh no, an Enemy with name " + enemy.nam[runsIntoEnemy] + " appeared");

            var attacks = rs.keyInYNStrict("\nDo you stand and fight?\n");
            if (attacks){
                var attackPower = Math.floor((Math.random() * 10) + 1);
                console.log("Your attack power is: " + attackPower +"\n");
                var yes = rs.keyInYNStrict("\nDo you still want to attack?\n");
                if(yes){
                    if(attackPower > enemy.enemyAttackPower){
                        console.log("Congratulations! you killed the enemy");
                    }
                    else{
                        console.log("The enemy killed you")
                    }
                } else{
                    console.log("Choose what you want to do:");
                }
            }
            else{
                console.log("no enemy");
            }
       }
        
    } else if(choice2 === 2){
        console.log(player);
        rs.question("\nPress any key to continue\n"); 
    }
}