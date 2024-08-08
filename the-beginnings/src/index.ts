import { add, sortList, sort } from './util/math';

const num: number = 4;

function log(message: string): void {
  const str: string = 'hello';
}

const numbers: number[] = [1, 2, 3, 4, 5];

// Type Union, one of ... | ...
let myOtherName: null | string = null;

console.log((myOtherName = 'hello'));

const things: Array<string | number | boolean> = ['hello', 42];

things.push(true);

let result: string | number | boolean | undefined = things.pop();

if (typeof result === 'string') {
  result.split(' ');
}

const numStr: Array<string> = numbers.map((num: number): string => {
  return num.toString();
});

console.log(numStr);
console.log(add(10, 10));
console.log(sort<number>([5, 3, 1, 1], (a, b) => a - b));
console.log(sort<string>(['5', '3', '2'], (a, b) => a.localeCompare(b)));
