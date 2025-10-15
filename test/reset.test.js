import { resetValues } from '../src/reset.js';

describe('Reset Functionality', () => {
  describe('resetValues', () => {
    test('should reset all values to their initial state', () => {
      // Assuming resetValues returns an object with default values
      const result = resetValues();
      expect(result).toEqual({
        temperature: 0,
        distance: 0,
        weight: 0,
        time: 0
      });
    });

    test('should not modify input parameters', () => {
      const input = { temperature: 25, distance: 1000, weight: 5000, time: 60 };
      resetValues(input);
      expect(input).toEqual({ temperature: 25, distance: 1000, weight: 5000, time: 60 });
    });

    test('should handle empty input', () => {
      const result = resetValues({});
      expect(result).toEqual({
        temperature: 0,
        distance: 0,
        weight: 0,
        time: 0
      });
    });

    test('should handle null or undefined input', () => {
      expect(() => resetValues(null)).not.toThrow();
      expect(() => resetValues(undefined)).not.toThrow();
    });
  });
});