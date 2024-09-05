// Задача 4: сортировка массива подсчетом
// Дан массив arr чисел >= 0
// Нужно отсортировать исходный массив в порядке возрастания чисел

export const countingSort = (arr: number[]) => {
  const countingArr: number[] = [];

  for (const num of arr) {
    countingArr[num] = (countingArr[num] || 0) + 1
  }

  let idx = 0;

  for (let num = 0; num < countingArr.length; num++) {
    for (let count = 0; count < countingArr[num]; count++) {
      arr[idx] = num;
      idx++
    }
  }
};
