function palindromeFinder(string) {
    var regex = /[\W_]/g;
    var lowRegexString = string.toLowerCase().replace(regex, '');
    var reverseString = lowRegexString.split('').reverse().join(''); 
    return reverseString === lowRegexString;
  }
  console.log(palindromeFinder("I madam, I made radio! So I dared! Am I mad?? Am I?!"));
  