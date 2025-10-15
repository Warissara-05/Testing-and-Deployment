import convertWeight from "../src/weight.js";

test("converts 5000 grams to 5 kilograms", () => {
  expect(convertWeight(5000)).toBe(5);
});
