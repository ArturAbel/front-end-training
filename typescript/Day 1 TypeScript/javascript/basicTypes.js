"use strict";
// 2
let isDone = true;
const age = 30;
const Name = "Dan";
const numbers = [];
const tuple = [];
function square(num) {
    return num * num;
}
console.log(square(age));
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
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        return `${this.name} has moved ${distance} meters`;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`Woof woof`);
    }
    move(distance) {
        return `Dog named ${this.name} has moved ${distance} meters`;
    }
}
const dog = new Dog("Bob");
dog.bark();
console.log(dog.move(10));
//5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sumNumbers = array.reduce((acc, cur) => acc + cur);
console.log(sumNumbers);
const Tuple = [
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
    logValues: (num, strArray) => console.log(num, strArray),
    addNumbers: () => complexObject.num1 + complexObject.num2,
    getStrings: () => complexObject.str1 + " " + complexObject.str2,
    getArrayLength: () => complexObject.numArray.length,
};
console.log(complexObject.getStrings());
console.log(complexObject.getArrayLength());
