const getStringLowerCase = require("../countsBs");

test("The result to BBC to equal 2", () => {
  expect(getStringLowerCase("BBC", "B")).toBe(2);
  expect(getStringLowerCase(`kakakakkakajjj`, `K`)).toBe(6);
});
