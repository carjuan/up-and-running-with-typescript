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

// Optional Properties
function printCar(car?: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  // we have narrowed car to type car
  if (!car) return;
  let str = `${car.make} ${car.model} ${car.year}`;

  // TypeGuards - Narrowing, specificity of type to get to number
  // we have eliminated the positibility of undefined type
  if (typeof car.chargeVoltage === 'number') {
    str += `// ${car.chargeVoltage}v`;
  }
  console.log(`Car: ${car.make} ${car.model} ${car.year}`);
}

printCar(car);

// Excess property checking.
// Are you using the extra field, if so where. If TypeScript
// is not able to find where the field is being used, TypeScript will
// error out!

// Type inference of {make: string; model: string; year: number; color: string}
printCar({
  make: 'Toyota',
  model: 'Corola',
  year: 2010,
  color: 'RED', //! Error: extra field and there is no check for this property anywhere.
});

// Index Signature
const x: { [k: string]: string } = {};

x.foo = '7';

// You can specify both explicit fields and index signatures
const phones: {
  mobile: {
    country: string;
    area: string;
    number: string;
  };
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined;
} = {
  home: { country: '+1', area: '211', number: '652-4515' },
  work: { country: '+1', area: '670', number: '752-5856' },
  mobile: { country: '+1', area: '322', number: '525-4357' },
};

// dot notation is used for known properties
phones.mobile;

// We know that this property 'aaaa' is not in phones dicitionary.
// by adding in the index signature type | undefined, we tell typescript that this
// value can be of type {country: string; area: string; number: string;} or undefined
// If not undefined is passed to the index signature, noUncheckedIndexAccess is set to true,
// typescript will set to that type or undefined.
const y = phones['aaaa'];

y && y.area;
y?.area;
if (y) {
  y.area;
}

