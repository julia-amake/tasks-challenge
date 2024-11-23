// Написать функцию, которая вернет все числа в объекте,
// в том числе вложенные

// в ширину через очередь

export const findNumbers = (obj: object): number[] => {
  const result: number[] = [];
  const queue: object[] = [obj];

  while (queue.length) {
    const currObj = queue.shift();
    if (!currObj) continue;

    Object.values(currObj).forEach(item => {
      if (typeof item === 'number') {
        result.push(item);
        return;
      }
      if (item === null || typeof item !== "object") return;
      queue.push(item);
    });
  }

  return result;
};

// в глубину через рекурсию

// export const findNumbers = (obj: object): number[] => {
//   const result: number[] = [];
//
//   const checkItems = (obj: object) => {
//     Object.values(obj).forEach(item => {
//       if (typeof item === 'number') {
//         result.push(item);
//         return;
//       }
//       if (item === null || typeof item !== 'object') return;
//       checkItems(item);
//     });
//   };
//
//   checkItems(obj);
//
//   return result;
// };
