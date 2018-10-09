
   
const twoSum = (arr,num) =>{
 //loop through array
    for(i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length; j++){
            if((arr[i] + arr[j]) === num){
                return [i,j]; 
            } 
        }

    }
}

console.log(twoSum([1,2,3],5))