import { countMostFrequent } from "./task5";

describe('task 5 - count most frequent', () => {
  test('should return 3', () => {
    expect(countMostFrequent([2, 3, 3, 4], [0, 2, 3, 4])).toBe(3);
  });

  test(' should return 2', () => {
    expect(countMostFrequent([], [0, 0])).toBe(2);
  });

  test('should return 0', () => {
    expect(countMostFrequent([], [])).toBe(0);
  });

  test('should return 1', () => {
    expect(countMostFrequent([1], [])).toBe(1);
  });
})
