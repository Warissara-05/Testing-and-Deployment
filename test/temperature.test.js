import convertTemperature from "../src/temperature.js";

test("converts 0°C to 32°F", () => {
  expect(convertTemperature(0)).toBe(32);
});
