import { splitString } from "./task9";

describe('task 9 — split string', () => {
  test.each([
    { str: '', expected: [] },
    { str: 'abcd', expected: ['ab', 'cd'] },
    { str: 'abc', expected: ['ab', 'c_'] },
    { str: 'abcdef', expected: ['ab', 'cd', 'ef'] },
    { str: 'abcde', expected: ['ab', 'cd', 'e_'] },
  ])('$str should return $expected', ({ str, expected }) => {
    expect(splitString(str)).toEqual(expected);
  });
});
