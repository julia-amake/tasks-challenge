import {isValid} from "./task1";

describe('task 1 valid parentheses', () => {
  test('() should return true', () => {
    expect(isValid('()')).toBe(true);
  });

  test('()() should return true', () => {
    expect(isValid('()()')).toBe(true);
  });

  test('((())()) should return true', () => {
    expect(isValid('((())())')).toBe(true);
  });

  test(') should return false', () => {
    expect(isValid(')')).toBe(false);
  });

  test('( should return false', () => {
    expect(isValid('(')).toBe(false);
  });

  test(')( should return false', () => {
    expect(isValid(')(')).toBe(false);
  });

  test('()(() should return false', () => {
    expect(isValid('()(()')).toBe(false);
  });

  test('((((())) should return false', () => {
    expect(isValid('()(()')).toBe(false);
  });
})
