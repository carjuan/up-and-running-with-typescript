import { add, sortList, sort } from './util/math';
import { createPerson, person1 } from './util/objects';
import fs from 'node:fs';
import type { Root, Child } from './types/reddit';

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
const y = phones['fax'];

const yu = [1, 2, 3, 4];
if (yu[0]) {
  // yeii we have yu[4] and available to access
}

// y is false
y && y.area;
y?.area;
if (y) {
  y.area;
}

// Tuples
// TS will infer that this array could be of type 'string' or 'number'
// however, we do not want that!
let myCar2 = [2002, 'Toyota', 'Corolla'];

// The following works but it has the wrong type
// as its values could be of type 'string', 'number' or 'undefined'.
const [year, make, model] = myCar2;

// A better approach would be to have the exact tuple type
let myCar3: [number, string, string] = [2002, 'Toyota', 'Corolla'];

// Now TS knows the fixed value of myCar3!
myCar3.length; // !pop, push methods will be available on this array as per TS

// the following value will be the right type!
const [year1, make1, model1] = myCar3;

// Treat arrays as immutable structures by using readonly
let myCar4: readonly [number, string, string] = [2002, 'Jeep', 'Cherokee'];

// Understand Types vs Values
// Tagged Unions
interface Square {
  kind: 'square';
  width: number;
}

interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape): number {
  if (shape.kind === 'rectangle') {
    return shape.height * shape.width;
  }
  return shape.width * shape.width;
}

type Evens = 2 | 4 | 6 | 8;
type OneThroughFive = 1 | 2 | 3 | 4 | 5;

// Type Assertion
let z = 4 as Evens & OneThroughFive;
function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughFive): void {}
function printEvenNumberUnderFive(num: OneThroughFive): void {}
function printNumber(num: number): void {}

printEven(z); // error if 'z' was union type. // Ok if it was intersection
printLowNumber(z); // error if 'z' was union type. // Ok if it was intersection
printEvenNumberUnderFive(z); // error if 'z' was union type. // Ok if it was intersection
printNumber(z);

// as const turns the type to a readonly tuple!

// Let's model the type aliases
type UserInfoOutcomeError = readonly ['error', Error];
type UserInfoOutcomeSuccess = readonly [
  'success',
  { readonly name: string; readonly email: string },
];

type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

const success: UserInfoOutcomeSuccess = [
  'success',
  { name: 'John', email: 'email@gmail.com' },
];

const fail: UserInfoOutcomeError = ['error', new Error('something went wrong')];

function flipCoin(): 'tails' | 'heads' {
  if (Math.random() > 0.5) return 'heads';
  return 'tails';
}

function getUserInfo(): UserInfoOutcome {
  if (flipCoin() === 'heads') return success;
  return fail;
}

// Another case of discriminated unions
const [message, handler] = getUserInfo();

if (handler instanceof Error) {
  console.log(handler.message);
} else {
  console.log(handler.email);
}

// Another way to handle the above case
if (message !== 'success') {
  // handler is type Error
  console.log(handler.message);
} else {
  // handler is type {name: string, email: string}
  handler.email;
}
