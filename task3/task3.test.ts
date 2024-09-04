import {findTopItems} from "./task3";

describe('task 3 — TOP k items', () => {
  test('should return [2]', () => {
    expect(findTopItems([2], 1)).toEqual([2]);
  });

  test('should return [3, 4, 5]', () => {
    expect(findTopItems([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test('should return [3, 4, 5]', () => {
    expect(findTopItems([1, 2, 3, 4, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test('should return [3, 4, 5, 6]', () => {
    expect(findTopItems([6, 5, 4, 3, 2, 1], 4)).toEqual([3, 4, 5, 6]);
  });

  test('should return [4, 5]', () => {
    expect(findTopItems([1, 5, 3, 2, 4], 2)).toEqual([4, 5]);
  });

  test('should return [1, 5]', () => {
    expect(findTopItems([1, 5], 3)).toEqual([1, 5]);
  });

  test('should return []', () => {
    expect(findTopItems([], 3)).toEqual([]);
  });
});
