// var rs = require("readline-sync");

 function Enemy(){
//     var names = ["kings", "ada", "esoks", "clive", "sus", "eta"];
 this.items = ["Potion", "Tinder Password", "key", "syphilis"];
//     this.nam = ["kings", "ada", "esoks", "clive", "sus", "eta"];
//     // this.attackPower = [Math.floor(Math.random() * names.length)];
//     this.hitPoints = Math.floor(Math.random() * 26 + 50);
//     this.enemyAttackPower = Math.floor(Math.random() * 10 + 1);
 }
// var runsIntoEnemy = Math.floor((Math.random() * 18 )+ 1) ;
// // var runsIntoEnemy = ((Math.random() * 6 )+ 1) ;//< .333333;
// var enemy = new Enemy();
//  if(enemy.nam[runsIntoEnemy] !== undefined){
var enemy = new Enemy();
    
//     console.log("Oh no, an Enemy with name " + enemy.nam[runsIntoEnemy] + " appeared");
//  }else{
//     console.log("you are safe");
// }
// var player = {
// name: "",
// hitPoints: 100,
// attackPower: 15,
// inventory: [],
// status: true
// }
// // var myObject = {
// //     sProp: 'some string value',
// //     numProp: 2,
// //     bProp: false
// function abc(){
//     player.status = false;
//     return player.status;
// }console.log(abc())
var rand = enemy.items[Math.floor(Math.random() * enemy.items.length)];
console.log(rand);