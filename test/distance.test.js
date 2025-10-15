import convertDistance from "../src/distance.js";

test("converts 1000 meters to 1 kilometer", () => {
  expect(convertDistance(1000)).toBe(1);
});
