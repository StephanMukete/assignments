var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var compCount = 0
for (var i = 0; i <= officeItems.length; i++){
    if(officeItems[i] === "computer"){
        compCount++
    }
}
console.log(compCount);
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] ;
  for (var i = 0; i <= peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough`)
      }
      else{
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough`)
      }
  }
  var on = false;
  var numOfSwitches = [2, 3, 2];

  for(var i = 0; i < numOfSwitches.length; i++){
    if(numOfSwitches[i] % 2 !== 0){
      on = !on;
    }
  }
  console.log(on);