//index

const notSame =[[1,2,3],["a","b","c"],[true, true, true]];
const same =[[true,false,true],[false,false,true]];

describe("Test data types", () => {
    it("should return false", () => {
        assert.isFalse(checkDataTypes(notSame))
    })
})