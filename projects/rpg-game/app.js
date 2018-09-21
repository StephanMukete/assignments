var rs = require("readline-sync");
var player = {
    name: "",
    hitPoints: 0,
    attackPower: 0,
    inventory: [],
    stillPlaying: true
}

function Enemy(){
    this.names = ["Ben", "Ken", "Stephan", "Dylan", "Anthony", "Nick"];
    this.items = ["banana", "phone", "key", "laptop", "book"];
    this.hitPoints = Math.floor(Math.random() * 26 + 50);
    this.enemyAttackPower = Math.floor(Math.random() * 10 + 1);
}

function handleFight(attackPower){
    let enemy = new Enemy(); 
    if(attackPower > enemy.enemyAttackPower){
            player.hitPoints = enemy.hitPoints;
            player.inventory = enemy.items[Math.floor(Math.random() * enemy.items.length)];;
            return `\nCongratulations! you killed the enemy`;
            rs.question("\nPress any key to continue\n");          
    }
        else{
                player.stillPlaying = false;
                return `Sorry!! you were killed by the enemy`;
        }
} 
  
function handleWalk(){
    var runsIntoEnemy = Math.floor((Math.random() * 18 )+ 1) ;
    var enemy = new Enemy(); 
    if(enemy.names[runsIntoEnemy] !== undefined){
        console.log( `\nOh no, an Enemy with name ${ enemy.names[runsIntoEnemy]} appeared`);
        var fight = rs.keyInYNStrict(`\nDo you stand and fight?\n`);
        if (fight){
            let fightPower = Math.floor((Math.random() * 10) + 1);
            console.log(`\nYour fighting power is: ${fightPower}`);
            return handleFight(fightPower);
        } else{
              var choice = rs.keyIn('\nyour only option left is to run. click "r" to run ', {limit: 'r'});
              let runsIntoEnemy = Math.floor((Math.random() * 6) + 1);
              if(enemy.names[runsIntoEnemy] !== undefined){
                  player.stillPlaying = false;
                  return `\nSorry! you couldn't escape The enemy killed you`
              } else{
                  player.stillPlaying = false;
                  return `\nLucky you!! You managed to escape`
              }
          }
    } else{
          console.log("\nYou are safe!!");
          let choice1 = rs.keyIn('click "w" to continue walking ', {limit: 'w'});
          if(choice1){
              return handleWalk();
          }
      }
}

player.name = rs.question("\nWelcome to RPG-land! What is your name?\n");

console.log(`\nHello, ${player.name}!`);

var mainOptions = ["walk", "check stats", "e"];

while(player.stillPlaying === true){
    let choice = rs.keyIn('\nclick "w" to walk, "c" to check stats or "e" to end game ', {limit: 'wce'});
    if(choice === "w"){
        console.log(handleWalk());
    } else if(choice === "c"){
        console.log(`name: ${player.name}, \nHit Point: ${player.hitPoints}, \nInventory: ${player.inventory}`);
        rs.question("\nPress any key to continue\n"); 
    } else {
        player.stillPlaying = false;
    }
}