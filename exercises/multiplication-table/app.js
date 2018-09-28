let array = [];

  function multiplicationTable(numbers, indexes){
  //---Loop for the groups
  for(let n = 0; n < numbers; n++){
//---Create multidimensional array
    array[n] = [];
    //---Loop for the indexes of the each group
    for(let i = 0; i < indexes; i++){
      array[n][i] = (n + 1) * (i + 1);
    }
  }
  return array;
}
console.log(multiplicationTable(4,5));
