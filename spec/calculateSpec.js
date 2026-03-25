const { calculate } = require('../script.js');

describe('calculate', function () {

  it('should return the correct simple interest for valid numeric inputs', function () {
    // P=1000, R=5%, T=2 years => Interest = 1000 * (5/100) * 2 = 100
    expect(calculate(1000, 5, 2)).toBe(100);
  });

  it('should return null when non-numeric strings are passed as inputs', function () {
    expect(calculate('abc', 5, 2)).toBeNull();
  });

});
