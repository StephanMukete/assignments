var chai = require("chai");
var assert = chai.assert;



var longestString = require("../app.js").longestString;

var testCases= {
    one : ["", "a", "bb", "cc", "dd", "ee" ],
    two:["abc", "abcd", "ab", "xyzz"]
}
describe("Testing longest string function", function(){
    it("Should return bb", function(){
    
        assert.strictEqual(longestString((testCases.one), "bb") );
    });
})