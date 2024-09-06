// Задача 6 Черная овечка
// Функция принимает массив целых чисел >= 0
// Нужно найти элемент, отличный по четности от остальных чисел
// и вернуть его индекс
// Такой элемент в массиве будет только 1


// Лучший вариант
export const findDifItemIndex = (arr: number[]) => {
  const mapper = [-1, -1];

  for (let i = 0; i < arr.length; i++) {
    const isOdd = arr[i] % 2;
    if (mapper[0] !== -1 && mapper[1] !== -1) return mapper[+!isOdd];
    mapper[+isOdd] = i;
  }

  return -1;
};

// 2 вариант
export const findDifItemIndex2 = (arr: number[]) => {
  if (arr.length < 3) return -1;

  const transformedArr: number[] = [];
  let sum = 0;

  arr.forEach((_, idx) => {
    const r = arr[idx] % 2;
    transformedArr[idx] = r;
    sum += r;
  });

  return transformedArr.indexOf(Number(sum <= 1));
};

// 1 вариант
export const findDifItemIndex1 = (arr: number[]) => {
  if (arr.length < 3) return -1;

  const oddIds: number[] = [];
  const evenIdx: number[] = [];

  arr.forEach((item, idx) => {
    (item % 2 ? oddIds : evenIdx).push(idx);
  });

  if (!oddIds.length || !evenIdx.length) return -1;

  return (oddIds.length > evenIdx.length ? evenIdx : oddIds)[0];
};
