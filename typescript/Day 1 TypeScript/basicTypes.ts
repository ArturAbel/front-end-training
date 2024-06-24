// 2
let isDone: boolean = true;
const age: number = 30;
const Name: string = "Dan";
const numbers: number[] = [];
const tuple: [] = [];

function square(num: number): number {
  return num * num;
}

console.log(square(age));

// 3
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
}

let Person = {
  firstName: "Dan",
  lastName: "Dan",
  age: 30,
  greet() {
    return `Hello ${this.firstName}`;
  },
};

console.log(Person.greet());

// 4

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  move(distance: number) {
    return `${this.name} has moved ${distance} meters`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark() {
    console.log(`Woof woof`);
  }
  move(distance: number) {
    return `Dog named ${this.name} has moved ${distance} meters`;
  }
}

const dog = new Dog("Bob");
dog.bark();
console.log(dog.move(10));

//5
const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const sumNumbers: number = array.reduce((acc, cur) => acc + cur);
console.log(sumNumbers);

const Tuple: [string, number][] = [
  ["hi", 5],
  ["hello", 10],
  ["bye", 15],
];

Tuple.forEach((couple) => console.log(couple));

// 6
const complexObject = {
  num1: 5,
  num2: 5,
  str1: "Hello",
  str2: "World",
  numArray: [1, 2, 3, 4, 5],

  logValues: (num: number, strArray: string[]): void =>
    console.log(num, strArray),
  addNumbers: (): number => complexObject.num1 + complexObject.num2,
  getStrings: (): string => complexObject.str1 + " " + complexObject.str2,
  getArrayLength: (): number => complexObject.numArray.length,
};

console.log(complexObject.addNumbers());
console.log(complexObject.getStrings());
console.log(complexObject.getArrayLength());
