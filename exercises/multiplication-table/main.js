//in app.js
const multTable = (x) => {
    const output = []
    for(let i = 1; i <= x; i++){
        output.push([]);
        for(let col = 1; col <=x; col++){
            output[r-1].push(row * col)
        }
    }
    return output;
}

module.exports = multTable;
//in index.js
const chai = require("chai");
const assert = chai.assert;

const multTable = require("../app");

const actual = [
     [ 1, 2, 3, 4, 5 ],
  [ 2, 4, 6, 8, 10 ],
  [ 3, 6, 9, 12, 15 ],
  [ 4, 8, 12, 16, 20 ]
]

describe("Testing multiplication function", () => {
    it("should return a 5 X 5 mult table", () => {
        assert.deepEqual(multTable(5), expected);
    })
})