import { calcMaxCount } from "./task7";

describe('task 7 - office', () => {
  test('should return 0', () => {
    expect(calcMaxCount([])).toBe(0);
  });

  test('should return 1', () => {
    expect(calcMaxCount([[1, 5]])).toBe(1);
  });

  test('should return 1', () => {
    expect(calcMaxCount([[1, 5], [5, 10]])).toBe(1);
  });

  test('should return 2', () => {
    expect(calcMaxCount([[1, 5], [0, 1], [4, 5]])).toBe(2);
  });

  test('should return 2', () => {
    expect(calcMaxCount([[1, 10], [5, 6], [2, 3], [7, 8]])).toBe(2);
  });

  test('should return 4', () => {
    expect(calcMaxCount([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]])).toBe(4);
  });
});
