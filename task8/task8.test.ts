import { binarySearch } from "./task8";

describe('task 8 - binary search', () => {
  test('should return 0', () => {
    expect(binarySearch([''], '')).toBe(0);
  });

  test('should return -1', () => {
    expect(binarySearch([], '')).toBe(-1);
  });

  test('should return 0', () => {
    expect(binarySearch(['apple'], 'apple')).toBe(0);
  });

  test('should return -1', () => {
    expect(binarySearch(['apple'], 'banana')).toBe(-1);
  });

  test('should return 1', () => {
    expect(binarySearch(['apple', 'banana'], 'banana')).toBe(1);
  });

  test('should return 0', () => {
    expect(binarySearch(['apple', 'banana', 'cherry'], 'apple')).toBe(0);
  });

  test('should return 1', () => {
    expect(binarySearch(['apple', 'banana', 'cherry'], 'banana')).toBe(1);
  });

  test('should return 2', () => {
    expect(binarySearch(['apple', 'banana', 'cherry'], 'cherry')).toBe(2);
  });

  test('should return -1', () => {
    expect(binarySearch(['apple', 'banana', 'cherry'], 'tomato')).toBe(-1);
  });

  test('should return 1 или 2', () => {
    const arr = ['apple', 'banana', 'banana', 'cherry'];
    expect(binarySearch(arr, 'banana')).toBeGreaterThanOrEqual(1);
    expect(binarySearch(arr, 'banana')).toBeLessThanOrEqual(2);
  });

  test('should return -1', () => {
    expect(binarySearch(['apple', 'banana', 'cherry'], 'Banana')).toBe(-1);
  });
});
