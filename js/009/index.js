console.log(`-----------------1--------------`);

const isSunny = true;
const isWeekend = false;

console.log(`Is Sunday -${isSunny}, is Weekend -${isWeekend}`);

console.log(`-----------------2--------------`);
const age = 20;
const license = true;
if (age > 18 && license == true) {
   console.log(`Conditions met.`);
}
else{
   console.log(`Conditions not met.`);
}

console.log(`-----------------3--------------`);
const knowsJavaScript = false;
const knowsPython = true;

if (knowsJavaScript == true || knowsPython == true) {
   console.log(`The person knows Java Script or Python`);
}
else{
   console.log(`The person doesn't know anything.`);
}

console.log(`-----------------4--------------`);
const isRaining = true;

console.log(`It is ${isRaining}ly raining It's not ${!isRaining}.`);

console.log(`-----------------5--------------`);
const likeMusic = true;
const playGuitar = false;
const hasTime = false;

if(likeMusic && (playGuitar || hasTime))
{
      console.log(`The person likes music and know to play the guitar or can learn that.`);
}
else{
   console.log(`He is useless.`);
}

console.log(`-----------------6--------------`);
const personAge = 25;

if (personAge > 18 ) {
   console.log(`Age greater then 18.`);
}

console.log(`-----------------7--------------`);

const currentTemperature = 30;

if (currentTemperature > 30 || currentTemperature < 20) {
   console.log(`The temperature is higher then 30 or lower then 20 degrees.`);
}
else{
   console.log(`The temperature is between 20 and 30 degrees.`);
}

console.log(`-----------------8--------------`);
const firstNum = 10;
const secondNum = `10`;

if (firstNum == secondNum) {
   console.log(`${firstNum} == ${secondNum}`);
}
else{
   console.log(`${firstNum} != ${secondNum}`);
}
if (firstNum === secondNum) {
   console.log(`${firstNum} === ${secondNum}`);
}
else{
   console.log(`${firstNum} !== ${secondNum}`);
}

console.log(`-----------------9--------------`);
let budget = 500, expense = 450;

(expense === budget) && console.log(`The expense is equal to the budget`);
(expense < budget) && console.log(`The expense is less then the budget`);

console.log(`-----------------10--------------`);

const person1Height = 170;
const person2Height = 165;
(person1Height === person2Height)&&console.log(`The height is the same.`);
(person1Height > person2Height)&&console.log(`The person is higher.`);
(person1Height< person2Height)&&console.log(`The person is shorter`);