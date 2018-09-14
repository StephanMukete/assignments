var num = [];
function fizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if ((i % 3 === 0) && (i % 5 === 0)){
            num.push("fizzbuzz");
        } else if(i % 3 === 0){
             num.push("fizz");
        } else if(i % 5 === 0){
            num.push("buzz");
        } else{
            num.push(i);
        }
    }
    return num;
}
function countFizzes(num){
    // create an object
    var counter = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0
    }
    for (var i = 0; i < num.length; i++){
        var numOrStr = num[i];

        if(counter.hasOwnProperty(num[i])){
            counter[numOrStr]++;
        }
    }
    // return object
    return counter;
}


const fizzArray = fizzBuzz();
console.log(countFizzes(fizzArray));

 //console.log(fizzBuzz());

// function countFizzes(num){
//     // create an object
//     var counter = {
//         fizzbuzz: 0,
//         fizz: 0,
//         buzz: 0
//     }
//     // loop over array
//     for (var i = 0; i < num.length; i++){
//           // if a string is found, add 1 to the right property
//           switch(arr[i]){
//               case "fizzbuzz":
//                  counter.fizzbuzz++;
//                  break;
//               case "fizz":
//                  counter.fizz++;
//                  break;
//               case "buzz":
//                  counter.buzz++;
//                  break;

//           }
//           return counter;
//     }
//     // if a string is found, add 1 to the right property
// }

// console.log(fizzBuzz(num));

