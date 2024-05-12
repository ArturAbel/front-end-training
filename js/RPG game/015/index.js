
//------------------------------------------------------

console.log(`\n1.\n`);


let string = `iron warrior`;
const stringArray = string.split('');

for (let i = 0; i < stringArray.length; i++) { 

   if (i === 0 || stringArray[i-1] === ' ') {
      stringArray[i] = stringArray[i].toUpperCase();              
   }
}
string = stringArray.join('');
console.log(string);


//------------------------------------------------------

console.log(`\n2.\n`);


const Input = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"];
const filteredInput = [];
let query = "Iron";

for (let i = 0; i < Input.length; i++) {

   if (Input[i].indexOf(query) !== -1) {
      filteredInput.push(Input[i]);
   }
}
console.log(filteredInput);

//------------------------------------------------------

console.log(`\n3.\n`);


let creatureString = "Goblin, Grunty";
creatureString = creatureString.split(', ').reverse().join(', ')
console.log(creatureString);


//------------------------------------------------------

console.log(`\n4.\n`);


const timeString =  "3h 45min";
let numbers = timeString.match(/\d+/g);
numbers = numbers.map(Number);

console.log(`${numbers[0]} hours and ${numbers[1]} minutes`);


//------------------------------------------------------

console.log(`\n5.\n`);


let fullString = "Epic Fantasy Battle";
const acronymArray = [];

fullString =  fullString.split('');

for (let i = 0; i < fullString.length; i++) {

   if (i === 0 || fullString[i-1] === ' ') {
      acronymArray.push(fullString[i]);
   }
}
let acronymString = acronymArray.join('');
console.log(acronymString);


//------------------------------------------------------

console.log(`\n6.\n`);


let characterType = 'Iron Warrior;Warrior;10';
console.log(characterType);

characterType= characterType.split(';');
console.log(`${characterType[0]}, class:${characterType[1]}, level:${characterType[2]}`);


//------------------------------------------------------

console.log(`\n7.\n`);


let locationName = "Dark Forest";
locationName = locationName.split(' ').join('-').toLowerCase();
console.log(locationName);


//------------------------------------------------------

console.log(`\n8.\n`);


const longVersionString = "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";
const charToCut = 50;

let shortVersionString = longVersionString.split('').slice(0, charToCut).join('');
console.log(`${shortVersionString}...`);


//------------------------------------------------------

console.log(`\n9.\n`);


const monstersString = "Goblin, Orc, Dragon";
const monsterArray = monstersString.split(',');
console.log(monsterArray);