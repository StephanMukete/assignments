//map
var arr = [1, 2, 3, 4]
var results = arr.map(function(item){
    return item + 10;
})

//filter
var arr = [1, 2, 3, 4]
var results = arr.filter(function(number){
    return number > 3
})

//reduce
var arr = [1, 2, 3, 4]
var results = arr.reduce(function(a, b){
    return a + b;
})
console.log(results)

//sort
var arr = [1, 2, 3, 4, 10, -3, 6, 18, 2]
var results = arr.sort(function(a, b){
    return a - b;
})
    console.log(results);

//forEach
var arr = [1, 2, 3, 4]
var results = forEach(function(number, i){
    return arr[i] = number * 10;
})
console.log(results)

//find
var arr = [1, 2, 3, 4]
var results = arr.find(function(number){
    return number > 2;
})
console.log(results)

//findIndex
var arr = [1, 2, 3, 4]
var results = arr.findIndex(function(number){
    return number > 2;
})
console.log(results)

//some
var arr = [1, 2, 3, 4]
var results = arr.some(function(number){
    return number > 2;
})
console.log(results)

//evrey
var arr = [1, 2, 3, 4]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var results = arr.every(function(number){
    return number > 2;
})
console.log(results);

//start
var arr = [1, 2, 3, 4];
var results;