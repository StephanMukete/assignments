function findMissingNo(arr){
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
       if(arr.indexOf(i) < 0 ) {
         return i;
       }
    }
}

module.exports = {
    findMissingNo
};