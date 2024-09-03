// Задача 1: Порядок скобок
// Дана строка s, которая содержит только символы '(' и ')'
// Нужно определить, является ли входная строка валидной
// Открытые скобки должны быть закрыты в правильном порядке
// s.length > 0

export const isValid = (s: string): boolean => {
  if (s.length % 2) return false;

  const stack: string[] = [];
  const opening = '(';

  for (let value of s.split('')) {
    if (value === opening) {
      stack.push(value);
      continue;
    }
    if (stack.pop() !== opening) return false;
  }

  return true;
};
