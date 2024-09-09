import { isValid } from "./task2";

describe('task 2 valid parentheses', () => {
  test.each([
    { data: '()', result: true },
    { data: '{}', result: true },
    { data: '()[]{}', result: true },
    { data: '({()})([]{})', result: true },
    { data: '((())())', result: true },
    { data: ')', result: false },
    { data: '(]', result: false },
    { data: '(}', result: false },
    { data: ')(){', result: false },
    { data: '(){[]', result: false },
    { data: '(){[])', result: false },
    { data: '(((((){}))', result: false },
  ])('should return the correct result', ({ data, result }) => {
    expect(isValid(data)).toBe(result);
  });
});
