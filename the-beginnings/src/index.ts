import { add, sortList, sort } from './util/math';
import { createPerson, person1 } from './util/objects';
import fs from 'node:fs';
import { Root, Child } from './types/reddit';

fs.readFile('path', () => {});

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

async function getRedditData() {
  const response = await fetch('https://www.reddit.com/r/javascript.json');
  console.log(response);
  const json: Root = await response.json();
  json.data.children.map((child: Child) => {
    console.log(child.data.clicked);
  });
}

// -- Overview of objects types
const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2002,
  chargeVoltage: 220,
};

let car: {
  make: string;
  model: string;
  year: number;
} = myCar;

