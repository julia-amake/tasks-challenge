import { findNumbers } from "./task10";

describe('task 10 — find primitive values', () => {
  test.each([
    {
      obj: {
        a: 1, b: { c: 2, d: { e: 3, f: 4 } },
        j: 5,
        k: { l: 6 }
      }, expected: [1, 2, 3, 4, 5, 6]
    },
    { obj: {}, expected: [] },
    { obj: { a: [5, 4] }, expected: [4, 5] },
    { obj: { a: [{ c: 3 }, 4] }, expected: [3, 4] },
    { obj: { a: null, b: { c: 4 }, d: 5 }, expected: [4, 5] },
  ])('$obj should return $expected', ({ obj, expected }) => {
    expect(findNumbers(obj).sort((a, b) => a - b)).toEqual(expected);
  });
});
