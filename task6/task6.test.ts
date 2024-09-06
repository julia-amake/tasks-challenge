import { findDifItemIndex } from "./task6";

describe('task 6 - black sheep', () => {
  test('should return 2', () => {
    expect(findDifItemIndex([1, 5, 2, 9])).toBe(2);
  })

  test('should return 1', () => {
    expect(findDifItemIndex([2, 3, 4, 12])).toBe(1);
  })

  test('should return 1', () => {
    expect(findDifItemIndex([1, 0, 5, 3])).toBe(1);
  })

  test('should return -1', () => {
    expect(findDifItemIndex([])).toBe(-1);
  })

  test('should return -1', () => {
    expect(findDifItemIndex([1])).toBe(-1);
  })

  test('should return -1', () => {
    expect(findDifItemIndex([2])).toBe(-1);
  })

  test('should return -1', () => {
    expect(findDifItemIndex([2, 1])).toBe(-1);
  })

  test('should return -1', () => {
    expect(findDifItemIndex([2, 4, 8, 102])).toBe(-1);
  })
})
