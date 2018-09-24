

//check the first and last index of each word

// function matchWords(str){
//     const toArray = str.split(" ");
//     const output = [];
//     for (let i = 0; i < toArray.length; i++){
//         if(i !== toArray.lastIndexOf(toArray[i]) && !output.includes(toArray[i])){
//             output.push(toArray[i]);
//         }
//     }
//     return output;
// }
// console.log(matchWords("the the boy"))

const matchWords = str =>{
    const word = str.split(" ");
    const count = {};
    const output = [];
    for(let i = 0; i < word.length; i++){
        if (!count[word[i]]){
            count[word[i]] = 1;
        } else if(count[word[i]] === 1){
            count[word[i]]++;
            output.push(word[i]);
        }
    }
    return output;
}
 console.log(matchWords('THE THE BOY BOY AND AND IS SI IS'))
 