const { rangeToArray, sumArray } = require("../range-array");

test(`O resultado deveria dar um array de 1 a 10`, () => {
  expect(rangeToArray(1, 10)).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    expect(rangeToArray(5, 1)).toEqual([5, 4, 3, 2, 1]),
    expect(rangeToArray(14, 9)).toEqual([14, 13, 12, 11, 10, 9]),
    expect(rangeToArray(83, 75)).toEqual([83, 82, 81, 80, 79, 78, 77, 76, 75]),
    expect(sumArray([1, 2, 34])).toEqual(37)
  );
});
