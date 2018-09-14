var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = [];
for(var i = 0; i <= people.length; i++){
    //if(people[i] === "Jon"){
        output.push(people[i]);
        for(var j = 0; j < alphabet.length; j++){
            alphabet.split();
            var toUpperCase = alphabet.toUpperCase();
            output.push(toUpperCase[j]);
           
        //}
    }
}
console.log("[ " + output.join(", ") + "]");
