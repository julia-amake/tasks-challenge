import {isValid} from "./task2";

describe('task 2 valid parentheses', () => {
  test('() should return true', () => {
    expect(isValid('()')).toBe(true);
  });

  test('{} should return true', () => {
    expect(isValid('{}')).toBe(true);
  });

  test('()[]{} should return true', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('({()})([]{}) should return true', () => {
    expect(isValid('({()})([]{})')).toBe(true);
  });

  test('(())()) should return true', () => {
    expect(isValid('((())())')).toBe(true);
  });

  test(') should return false', () => {
    expect(isValid(')')).toBe(false);
  });

  test('(] should return false', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('(} should return false', () => {
    expect(isValid('(}')).toBe(false);
  });

  test(')(){ should return false', () => {
    expect(isValid(')(){')).toBe(false);
  });

  test('(){[] should return false', () => {
    expect(isValid('(){[]')).toBe(false);
  });

  test('(){[]) should return false', () => {
    expect(isValid('(){[])')).toBe(false);
  });

  test('(((((){})) should return false', () => {
    expect(isValid('(((((){}))')).toBe(false);
  });
})
