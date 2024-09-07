// Задача: Поиск строки в отсортированном массиве строк с помощью бинарного поиска
// Нужно найти индекс целевой строки в массиве.
// Если строка не найдена, вернуть -1.
// Исходный массив уже отсортирован в алфавитном порядке

export const binarySearch = (arr: string[], str: string) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (arr[middle] === str) return middle;

    if (arr[middle] > str) last = middle - 1;
    else first = middle + 1;
  }

  return -1;
};
