// function countCode(str) {
//     console.log(str.match(/co\De/gi));
//     return str.match(/co\De/gi).length;
// }
// //
// console.log("cozexxcope".match(/co.e/g));

function sum(x, y) {
    try{
        if(typeof x !== "number" || typeof y !== "number"){
            throw "ERROR: Inputs must be numbers!"
        }
        return x + y;
    }
    catch(err){
        console.log(err);
    }
}

console.log(sum("345", 2));
function countVoters(arr){
    var totalVoters = arr.reduce(function(counter, currentVoter){
        if(currentVoter.voted){
            return counter + 1;
        }    
        return counter;   
    }, 0)
}

var customReduce = function(arr, cb, initialValue){
    var accumulator = initialValue || arr[0];
    var i = initialValue === undefined ? 1:0;

    for(var i = 0; i < arr.length; i++){
        accumulator = cb(accumulator, arr[i]);
    }
    return accumulator;
}

var numbers = [1,2,3,4,5]
var sum = function(total, x){
    return total + x;
}
console.log(customReduce(numbers, sum));

function countLetters(str){
    return str.split("").reduce(function (counter, ltr){
        if(counter[ltr]){
            counter[ltr]++;
            return counter;
        } else{
            
        }
    })
}