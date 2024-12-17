// Найти самый длинный префикс среди заданных строк
// ['line', 'listen', 'library'] => 'li'

export const findPrefix = (arr: string[]) => {
  if (!arr.length) return '';

  arr.sort((a, b) => a.length - b.length);

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currPrefix = '';

    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] === arr[i][j]) currPrefix += prefix[j];
    }

    prefix = currPrefix;
  }

  return prefix;
};
