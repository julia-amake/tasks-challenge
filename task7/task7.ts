// Задача 7 Офис
// Написать функцию, которая определяет максимальное количество
// сотрудников, одновременно присутствующих в офисе
// Данные в формате [время_входа, время_выхода]
// Если совпадет время входа и выхода нескольких сотрудников,
// выход происходит раньше.
// Функция принимает список пар времени (положительные числа) и возвращает максимальное количество
// сотрудников

export const calcMaxCount = (arr: number[][]) => {
  if (arr.length < 2) return arr.length;

  const all: { value: number, status: 'in' | 'out' }[] = [];

  arr.forEach((item) => {
    all.push({ value: item[0], status: 'in' });
    all.push({ value: item[1], status: 'out' });
  });

  all.sort((a, b) => {
    if (a.value !== b.value) return a.value - b.value;
    if (a.status === b.status) return 0;
    return a.status === 'out' ? -1 : 1;
  });

  let count = 0;
  let max = 0;

  all.forEach(item => {
    if (item.status === 'out') count--;
    if (item.status === 'in') count++;

    if (count > max) max = count;
  })

  return max;
};
