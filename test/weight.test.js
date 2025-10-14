import { gramToKilogram } from '../src/weight.js';

describe('Weight Conversion', () => {
  describe('gramToKilogram', () => {
    test('should convert grams to kilograms correctly', () => {
      expect(gramToKilogram(1000)).toBe(1);
      expect(gramToKilogram(5000)).toBe(5);
      expect(gramToKilogram(0)).toBe(0);
    });

    test('should handle decimal values', () => {
      expect(gramToKilogram(1500)).toBe(1.5);
      expect(gramToKilogram(2500)).toBe(2.5);
    });

    test('should handle negative values', () => {
      expect(gramToKilogram(-1000)).toBe(-1);
    });

    test('should handle edge cases', () => {
      expect(gramToKilogram(1)).toBe(0.001);
      expect(gramToKilogram(999)).toBe(0.999);
    });
  });
});