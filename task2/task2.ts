// Задача 2: Порядок скобок (усложненный)
// Дана строка s, которая содержит только символы '(', ')', '{', '}', '['и ']'
// Нужно определить, является ли входная строка валидной
// Открытые скобки должны быть закрыты в правильном порядке
// Каждой закрывающейся скобке соответствует открывающаяся скобка того же типа
// s.length > 0

export const isValid = (s: string): boolean => {
  if (s.length % 2) return false;

  const mapObj: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack: string[] = [];

  for (let value of s.split('')) {
    if (mapObj[value]) {
      stack.push(value);
      continue;
    }

    const removed = stack.pop();
    if (!removed || mapObj[removed] !== value) return false;
  }

  return !stack.length;
};
