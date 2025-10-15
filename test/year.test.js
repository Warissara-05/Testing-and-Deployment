import convertYear from "../src/year.js";

test("converts 2568 BE to 2025 CE", () => {
  expect(convertYear(2568)).toBe(2025);
});
