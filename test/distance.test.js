import { meterToKilometer } from '../src/distance.js';

describe('Distance Conversion', () => {
  describe('meterToKilometer', () => {
    test('should convert meters to kilometers correctly', () => {
      expect(meterToKilometer(1000)).toBe(1);
      expect(meterToKilometer(5000)).toBe(5);
      expect(meterToKilometer(0)).toBe(0);
    });

    test('should handle decimal values', () => {
      expect(meterToKilometer(1500)).toBe(1.5);
      expect(meterToKilometer(2500)).toBe(2.5);
    });

    test('should handle negative values', () => {
      expect(meterToKilometer(-1000)).toBe(-1);
    });

    test('should handle edge cases', () => {
      expect(meterToKilometer(1)).toBe(0.001);
      expect(meterToKilometer(999)).toBe(0.999);
    });
  });
});