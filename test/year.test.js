import { test, expect, describe} from '@jest/globals';
import convertYear from "../src/year.js";

describe("Year Conversion", () => {
  test("converts 2568 BE to 2025 CE", () => {
    expect(convertYear(2568)).toBe(2025);
  });
});
