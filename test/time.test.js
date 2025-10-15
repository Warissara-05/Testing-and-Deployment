import { test, expect, describe} from '@jest/globals';
import convertTime from "../src/time.js";

describe("Time Conversion", () => {
  test("converts 90 minutes to 1.5 hours", () => {
    expect(convertTime(90)).toBe(1.5);
  });
});

