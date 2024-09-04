// Задача 3: нахождение k максимальных чисел
// Даны массив чисел arr и число k
// Нужно найти ТОП k самых больших чисел в массиве arr
// Вернуть массив чисел в порядке возрастания
// Числа на вход > 0, целые

export const findTopItems = (arr: number[], k: number) => {
  const sortedUniqArr = [...new Set(arr)].sort((a, b) => a - b);

  if (sortedUniqArr.length <= k) return sortedUniqArr;
  return sortedUniqArr.slice(-k);
};
