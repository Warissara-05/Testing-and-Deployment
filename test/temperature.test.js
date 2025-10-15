import { test, expect,describe} from '@jest/globals';
import convertTemperature from "../src/temperature.js";

describe("Temperature Conversion", () => {
  test("converts 0°C to 32°F", () => {
    expect(convertTemperature(0)).toBe(32);
  });
});

