console.log(`-----------------------1--------------------`);
const num1 = 8;
const num2 = 15;
let sum = num1 + num2;

console.log(`${num1} + ${num2} = ${sum}`);

console.log(`-----------------------2--------------------`);
const a = 30;
const b = 12;
let sub = a - b;

console.log(`${a} - ${b} = ${sub}`);

console.log(`-----------------------3--------------------`);
const x = 7;
const y = 3;
let multiply = x * y;

console.log(`${x} x ${y} = ${multiply}`);

console.log(`-----------------------4--------------------`);
const dividend = 20;
const divisor = 4;
let divSum = dividend / divisor;
let reminder = dividend % divisor;

console.log(`${dividend} / ${divisor} = ${divSum}\nThe reminder of ${dividend} / ${divisor} is ${reminder}`);

console.log(`-----------------------5--------------------`);
const number1 = 15; 
const number2 = 25;
const number3 = 10;
let avg = (number1 + number2 + number3) / 3

console.log(`The average of ${number1}, ${number2}, ${number3} is ${avg} `);

console.log(`-----------------------6--------------------`);
// The modulo operator used to show the reminder.
const unit = 12;

//Here: 12 / 5 = 5 + 5 + 2, the reminder is 2.
console.log(`${unit} % 5 = ${unit % 5}`); 

console.log(`-----------------------7--------------------`);
const n = 9;

if(n % 2 == 0)
{console.log(`The number ${n} is even`);}
else
{console.log(`\nThe number ${n} is odd`);}

console.log(`-----------------------8--------------------`);
const m = 35;

if(m % 5 == 0 && m % 7 == 0)
{
{console.log(`The number ${m} is divisible by 5 and 7.`);}
}
else
{console.log(`\nThe number ${m} is not divisible by 5 and 7.`);}

console.log(`-----------------------9--------------------`);

for (let count = 1, list = 1; count <= 20; count++) {

   if (count % 4 == 0) {
      console.log(`${list}. ${count}`);
      list++;
   }   
}

console.log(`-----------------------10--------------------`);
const andArray = [24, 12, 3];

for (let index = 0; index < andArray.length; index++) {

   if (andArray[index] < 20 && andArray[index] > 10) {
      console.log(`${andArray[index]} is in range`);
   }
   else {
      console.log(`${andArray[index]} is not in range`);
   }
}

console.log(`-----------------------11--------------------`);

const orArray = [23,-3,2,5,22];

for (let i = 0; i < orArray.length; i++) {
   
   if (orArray[i] < -5 || orArray[i] > 10) {
      console.log(`${orArray[i]} is in range.`);
   }
   else{
      console.log(`${orArray[i]} is not in range.`);
   }
}

console.log(`-----------------------12--------------------`);

let bool = true;

if (!bool) {
   console.log(`verification isn't correct.`);
}
else{
   console.log(`verification is correct.`);
}

console.log(`-----------------------13--------------------`);

const lastArray = [33,6,-3,21,88];

for (let j = 0; j < lastArray.length; j++) {
   if ((lastArray[j] > 5 && lastArray[j] < 10) || (lastArray[j] >20 && lastArray[j] < 30)) 
   {
      console.log(`The number ${lastArray[j]} is alright.`);
   }
   else
   {
      console.log(`The number ${lastArray[j]} is not correct.`);
   }
}


let user = false;

if (!user) {
   console.log(`\nThis is false`);
}