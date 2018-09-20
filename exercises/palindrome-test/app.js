// function palindromeFinder(string) {
//     var regex = /[\W_]/g;
//     var lowRegexString = string.toLowerCase().replace(regex, '');
//     var reverseString = lowRegexString.split('').reverse().join(''); 
//     return reverseString === lowRegexString;
//   }
//   console.log(palindromeFinder("I madam, I made radio! So I dared! Am I mad?? Am I?!"));
  

  function sum(x, y){
    console.log(x);
    return x + y;
  
}
function isLssThanEqualTo(x,){
    return x <= 0;
  
}

function longestString(arr){
    
    var lgth = 0;
    var longest;
    var arr = [""];
    for(var i=0; i < arr.length; i++){
        if(arr[i].length > lgth){
            var lgth = arr[i].length;
            longest = arr[i];
        }      
    }
    return longest;
} 

module.exports = {
    sum: sum,
    isLssThanEqualTo: isLssThanEqualTo,
    longestString: longestString
};