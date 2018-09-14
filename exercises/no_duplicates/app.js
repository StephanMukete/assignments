var input = "bookkeeper larry";
function noDuplicates(s) {
    var array = input.split('')
   array = array.filter(function(phrase,index){
       return array.indexOf(phrase) == index
   })
  return array.join('')
  
  }
  console.log(noDuplicates(input));

  var input = "bookkeeper larry";
function theExtras(input) {
    var array = input.split('')
   array = array.filter(function(phrase,index){
       return array.indexOf(phrase) !== index
   })
  return array.join('')
  
  }
  console.log(theExtras(input));
  
  function duplicates(str){
    var recordOfPastCharacters = {};
    var output = "";

        for (var i = 0; i < str.length; i++){
        var currentLetter = str[i];
            if (recordOfPastCharacters[currentLetter] == undefined){
                recordOfPastCharacters[currentLetter] = i;
            } else{
                output += currentLetter;
            }
        }
        return output;
    }

    console.log(duplicates("therhwgdseew"));
