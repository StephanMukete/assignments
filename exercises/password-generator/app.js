// console.log(String.fromCharCode(67));
// console.log(Math.floor(Math.random() * 10) + 1);
function generatePassword (length) {
    var password = '';
    var character;
	while ((length > password.length) && (character !== 32) ){
		if (password.indexOf(character = String.fromCharCode(Math.floor(Math.random() * 95) + 11)))  {
			password += character;
		}
	}
	return password;
}
console.log(generatePassword(5));
// var generatePassword = require("password-generator");

// var maxLength = 18;
// var minLength = 12;
// var uppercaseMinCount = 3;
// var lowercaseMinCount = 3;
// var numberMinCount = 2;
// var specialMinCount = 2;
// var UPPERCASE_RE = /([A-Z])/g;
// var LOWERCASE_RE = /([a-z])/g;
// var NUMBER_RE = /([\d])/g;
// var SPECIAL_CHAR_RE = /([\?\-])/g;
// var NON_REPEATING_CHAR_RE = /([\w\d\?\-])\1{2,}/g;

// function isStrongEnough(password) {
//   var uc = password.match(UPPERCASE_RE);
//   var lc = password.match(LOWERCASE_RE);
//   var n = password.match(NUMBER_RE);
//   var sc = password.match(SPECIAL_CHAR_RE);
//   var nr = password.match(NON_REPEATING_CHAR_RE);
//   return password.length >= minLength &&
//     !nr &&
//     uc && uc.length >= uppercaseMinCount &&
//     lc && lc.length >= lowercaseMinCount &&
//     n && n.length >= numberMinCount &&
//     sc && sc.length >= specialMinCount;
// }

// function customPassword() {
//   var password = "";
//   var randomLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
//   while (!isStrongEnough(password)) {
//     password = generatePassword(randomLength, false, /[\w\d\?\-]/);
//   }
//   return password;
// }

// console.log(customPassword()); // => 2hP5v?1KKNx7_a-W