function getLetterFrequency(string) {
    var frequency = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (frequency[character]) {
           frequency[character]++;
        } else {
           frequency[character] = 1;
        }
    }
    //loop through an object
    var dupesRemoved = "";
    for(var key in frequency){
    dupesRemoved += key
}

    return dupesRemoved;
};
console.log(getLetterFrequency("good"));

