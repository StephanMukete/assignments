var chai = require("chai");
var assert = chai.assert;

var getOlderThan18 = require("../app.js").getOlderthan18;

var people = [
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 100
    },{
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ];

  describe("testing older than 18", function(){
      it("should return an array of people over 18 years old", function(){
          assert.deepEqual(getOlderThan18(people), getOlderThan18);
      })
  })