console.log(`----------------1------------------`);

const number = 123;
const numberToString = number.toString();
console.log(`${numberToString} ${typeof numberToString}`);

console.log(`----------------2------------------`);

const stringToNumber = `123.4`
const numberInt = parseInt(stringToNumber);
console.log(`${numberInt} ${typeof numberInt}`);

console.log(`----------------3------------------`);

const numberFloat = parseFloat(stringToNumber);
console.log(`${numberFloat} ${typeof numberFloat}`);

console.log(`----------------4------------------`);

console.log(`${number + stringToNumber}`);
console.log(`----------------5------------------`);

const boolNumber = !!number;
console.log(`${boolNumber} ${typeof boolNumber}`);

console.log(`----------------6------------------`);

const UnaryNumber = +stringToNumber;
console.log(`${UnaryNumber} ${typeof UnaryNumber}`);

console.log(`----------------7------------------`);
const boolTrue = true;
const boolFalse = false;

const numberTrue = +boolTrue;
const numberFalse = +boolFalse;
console.log(`${numberTrue} ${typeof numberTrue}, ${numberFalse} ${typeof numberFalse}`);

console.log(`----------------8------------------`);
const nullNumber = null;
const nullToNumber = +nullNumber;
console.log(`${nullToNumber} ${typeof nullToNumber}`);
