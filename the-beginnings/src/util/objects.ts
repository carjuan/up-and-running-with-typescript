// Objects types, interfaces

interface Person {
  name: string;
  favNumber: number;
}

interface ExtraPerson extends Person {
  height: number;
}

export const createPerson = (name: string, favNumber: number): ExtraPerson => {
  return {
    name,
    favNumber: 5,
    height: 90,
  };
};

const person1: ExtraPerson = createPerson('juan', 55);

export { person1 };
