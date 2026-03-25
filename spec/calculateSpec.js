const { calculate } = require("../src/script.js");

describe("calculate", function () {

  it("should return correct simple interest for valid inputs", function () {
    // 1000 * (5/100) * 2 = 100
    expect(calculate(1000, 5, 2)).toBe(100);
  });

  it("should return null for non-numeric string inputs", function () {
    expect(calculate("abc", 5, 2)).toBeNull();
  });

});
