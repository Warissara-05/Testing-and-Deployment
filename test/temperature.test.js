import { celsiusToFahrenheit } from '../src/temperature.js';

describe('Temperature Conversion', () => {
  describe('celsiusToFahrenheit', () => {
    test('should convert Celsius to Fahrenheit correctly', () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
      expect(celsiusToFahrenheit(100)).toBe(212);
      expect(celsiusToFahrenheit(25)).toBe(77);
    });

    test('should handle decimal values', () => {
      expect(celsiusToFahrenheit(36.6)).toBeCloseTo(97.88);
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    test('should handle negative values', () => {
      expect(celsiusToFahrenheit(-10)).toBe(14);
      expect(celsiusToFahrenheit(-273.15)).toBeCloseTo(-459.67);
    });

    test('should handle edge cases', () => {
      expect(celsiusToFahrenheit(37)).toBe(98.6);
    });
  });
});