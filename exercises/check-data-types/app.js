// const checkDataTypes = arr => {
//     const firstDT = typeof arr[0][0];
//     return arr.every(nestedArray => nestedArray.every(el => typeof el === firstDT));
// }

function checkTypes(arr) {
    var arrType = typeof arr[0][0]
    for(var i = 1; i< arr.length; i++){
      for(var y = 0; y < arr[i].length; y++){
      if(typeof arr[i][y] !== arrType) return false
      }
    }
    return true
  }
console.log(checkTypes([1,2,3],["a","b","c", 1]));