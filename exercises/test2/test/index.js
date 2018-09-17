var chai = require("chai");
var assert = chai.assert;

// var sum = require("../app.js").sum;

// describe("Testing sum function", function(){
//     it("Should return 8", function(){
//         assert.equal(sum(5, 3), 8);
//     });
//     it("Should return -14", function(){
//         assert.equal(sum(-4, -10), -14);
//     });
//     it("Should return 0", function(){
//         assert.equal(sum(0, 0), 0);
//     });
//     it("Should return 2", function(){
//         assert.equal(sum(5, -3), 2);
//     });
// })

// var isLessThanEqualTo = require("../app").isLssThanEqualTo;
// describe("Testing less than function", function(){
//     it("should return true", function(){
//         assert.isFalse(isLessThanEqualTo(5))
//     })
// })


var longestString = require("../app.js").longestString;

var testCases= {
    one : ["", "a", "bb", "cc", "dd", "ee" ],
    two:["abc", "abcd", "ab", "xyzz"]
}
describe("Testing longest string function", function(){
    it("Should return bb", function(){
    
        assert.strictEqual(longestString((testCases.one), "bb") );
    });
// describe("Testing longest string function", function(){
//     it("Should return bb", function(){
    
//         assert.isAbove(longestString(["abc", "abcd", "ab", "xyzz"], "abcd") );
//     });
    // it("Should return -14", function(){
    //     assert.equal(longestString(-4, -10), -14);
    // });
    // it("Should return 0", function(){
    //     assert.equal(sum(0, 0), 0);
    // });
    // it("Should return 2", function(){
    //     assert.equal(sum(5, -3), 2);
    // });
})