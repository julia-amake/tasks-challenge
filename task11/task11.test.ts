import { findPrefix } from "./task11";

describe('task 11 — find prefix', () => {
  test.each([
    {arr: [], expected: ''},
    {arr: ['aabc', 'acd', 'aff'], expected: 'a'},
    {arr: ['library', 'line', 'listen', ], expected: 'li'},
  ])('$arr should return $expected', ({ arr, expected }) => {
    expect(findPrefix(arr)).toBe(expected);
  });
});
