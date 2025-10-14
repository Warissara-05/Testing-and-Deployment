import { minuteToHour } from '../src/time.js';

describe('Time Conversion', () => {
  describe('minuteToHour', () => {
    test('should convert minutes to hours correctly', () => {
      expect(minuteToHour(60)).toBe(1);
      expect(minuteToHour(120)).toBe(2);
      expect(minuteToHour(0)).toBe(0);
    });

    test('should handle decimal values', () => {
      expect(minuteToHour(90)).toBe(1.5);
      expect(minuteToHour(30)).toBe(0.5);
    });

    test('should handle negative values', () => {
      expect(minuteToHour(-60)).toBe(-1);
    });

    test('should handle edge cases', () => {
      expect(minuteToHour(1)).toBeCloseTo(0.0167);
      expect(minuteToHour(59)).toBeCloseTo(0.9833);
    });
  });
});