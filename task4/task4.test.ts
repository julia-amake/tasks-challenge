import { countingSort } from "./task4";

describe('task 4 counting sort', () => {
  test('should sort numbers', () => {
    const arr = [3, 0, 2];
    countingSort(arr);
    expect(arr).toEqual([0, 2, 3]);
  });

  test('should sort numbers', () => {
    const arr = [3, 2, 0];
    countingSort(arr);
    expect(arr).toEqual([0, 2, 3]);
  });

  test('should not change the original order when sorted', () => {
    const arr = [0, 2, 3];
    countingSort(arr);
    expect(arr).toEqual([0, 2, 3]);
  });
});
