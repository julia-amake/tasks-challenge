// Задача 5
// Найти, сколько раз встречается самый частый элемент
// в объединении двух отсортированных по возрастанию массивов

export const countMostFrequent = (arr1: number[], arr2: number[]) => {
  const counters: Map<number, number> = new Map();

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    [arr1, arr2].forEach(arr => {
      const num = arr[i];
      if (num === undefined) return;
      counters.set(num, (counters.get(num) || 0) + 1);
    });
  }

  return Math.max(0, ...counters.values());
};
