import { findTopItems } from "./task3";

describe('task 3 — TOP k items', () => {
  test.each([
    { arr: [2], top: 1, expected: [2] },
    { arr: [1, 2, 3, 4, 5], top: 3, expected: [3, 4, 5] },
    { arr: [1, 2, 3, 4, 4, 5], top: 3, expected: [3, 4, 5] },
    { arr: [6, 5, 4, 3, 2, 1], top: 4, expected: [3, 4, 5, 6] },
    { arr: [1, 5, 3, 2, 4], top: 2, expected: [4, 5] },
    { arr: [1, 5], top: 3, expected: [1, 5] },
    { arr: [], top: 3, expected: [] },
  ])('should return the correct result', ({ arr, top, expected }) => {
    expect(findTopItems(arr, top)).toEqual(expected);
  });
});
