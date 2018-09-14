var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// function printLyrics(lyrics){
//     return lyrics;
// }
// function printLyrics(lyrics){
//     return lyrics.join(" ");
// }
 function printLyricsBackwards(lyrics){
       return lyrics.reverse().join(" ");
       //return lyrics.join(" ").reverse();
//     var reversedLyrics = lyrics.reverse();
//     return reversedLyrics.join(" ");
 }
// function printLyricsRandomly(lyrics){
//     var output = [];
//     var length = lyrics.length;
//     for(var i = 0; i < length; i++){
//         var rand = lyrics[Math.floor(Math.random() * lyrics.length)]
//         output.push(lyrics[rand]);
//         lyrics.splice(rand, 1);
//     }
 
//     return output.join(" ");
// }
function random(arr) {
    var output =[];
    var length = arr.length
    for (var i=0; i<length ; i++) {
        var getRandom = Math.floor(Math.random() * arr.length);
        output.push(arr[getRandom]);
        arr.splice(getRandom, 1);
    }
    return output.join(' ');
}
// console.log(printLyrics(lyrics));
// console.log(printLyricsBackwards(lyrics));
//console.log(printLyricsRandomly(lyrics));
console.log(random(lyrics));
// function printEveryOrder(lyrics){
//     var lyricsString = "";
//     for(var i = 0; i < lyrics.length; i++){
//         if(i % 2 === 0){
//             lyricsString += lyrics[i] + " ";  
//         }
//     }
//     return lyricsString
// }
// console.log(printEveryOrder(lyrics));
// function switchLyrics(lyrics){
  //  var lyricsString = "";
//     var output = [];
//     var cou
//     for(var i = 0; i < lyrics.length; i++){
//         if(lyrics.length - 1 === i){
//             output.push(lyrics)
//         }
//     }
// }