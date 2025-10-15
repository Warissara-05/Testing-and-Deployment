import convertTime from "../src/time.js";

test("converts 90 minutes to 1.5 hours", () => {
  expect(convertTime(90)).toBe(1.5);
});
