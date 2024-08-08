export function add(a: number, b: number): number {
  return a + b;
}

export const sortList = (numbers: number[]): number[] => {
  return [...numbers].sort((a: number, b: number): number => a - b);
};

export const sortListString = (strings: string[]): string[] => {
  return [...strings].sort((a, b) => a.localeCompare(b));
};

export function sort<Type>(
  values: Array<Type>,
  compare: (a: Type, b: Type) => number
): Array<Type> {
  return [...values].sort(compare);
}
