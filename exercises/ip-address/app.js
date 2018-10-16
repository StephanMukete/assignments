//index
const {assert} = require('chai');

const validateIp = require('../app');

const testCases = [
    '123.123.123',
    '256.256.256.256',
    'a'
]
describe("Validate IP test", () => {
    it('should return false', () =>{
        assert.isFalse(validateIp(testCases[0]))

    })
})
// index.js
function checkIp (str) {
  const split = str.split(".");
  if (split.length === 4) {
    for (let i = 0; i < split.length; i++) {
      split[i] *= 1;
      if (split[i] > 255 || isNaN(split[i])) return "not valid";
    }
    return "valid";
  }
  return "not valid";
}

//real index that works
const validateIpAddress = (ipAddress) => {
    isValid = false;
    ipAddyArray = ipAddress.split(".");
    if(ipAddyArray.length === 4){
        for(let i = 0; i < 4; i++){
            let currentNum = ipAddyArray[i];
            if(currentNum > 255 || currentNum < 0 || !Number(currentNum) || currentNum === ""){
                isValid = false;
                break;
            } else {
                isValid = true;
            }
        }
    }
    return isValid;
}