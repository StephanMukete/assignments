var arr = [""];
function longestString(arr){
    
    var lgth = 0;
    var longest;

    for(var i=0; i < arr.length; i++){
        if(arr[i].length > lgth){
            var lgth = arr[i].length;
            longest = arr[i];
        }      
    }
    return longest;
} 

console.log(longestString(["abc", "abcd", "ab", "xyzz"]));