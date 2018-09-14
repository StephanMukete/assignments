// var lyrics = ["This", "hit", "that", "ice", "cold", 
//               "Michelle", "Pfeiffer", "that", "white", 
//               "gold", "This", "one", "for", "them", 
//               "hood", "girls", "Them", "good", "girls", 
//               "straight", "masterpieces", "Stylin'", 
//               "whilen'", "livin'", "it", "up", "in", 
//               "the", "city", "Got", "Chucks", "on", 
//               "with", "Saint", "Laurent", "Gotta", "kiss", 
//               "myself", "I'm", "so", "pretty"];

            
//                  function random(arr) {
//                     var output =[];
//                     var length = arr.length
//                     for (var i=0; i<length ; i++) {
//                         var getRandom = Math.floor(Math.random() * arr.length);
//                         output.push(arr[getRandom]);
//                         arr.splice(getRandom, 1);
//                     }
//                     return output.join(' ');
//                 }
//                     console.log(random(lyrics));

function isCaps(letter) {
    return letter === letter.toUpperCase();
  }

function antiCaps(string){
    var newString = " "
    for(var i = 0; i < string.length; i++){
        if(isCaps(string[i])){
            newString += string[i].toLowerCase();
        }
        else{
            newString += string[i].toUpperCase();
        }
    }
    return newString;
}
console.log(antiCaps("Hello"));