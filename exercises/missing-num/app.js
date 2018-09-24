
const numbers =[] ;
function missingNumber(arr){
    for(let i = Math.min.apply(null, arr); i <= arr.length; i++){
       if(arr.indexOf(i) < 0 ) {
         return i;
       }
    }
}
console.log(missingNumber([-3,0,3,2,-1,1]));