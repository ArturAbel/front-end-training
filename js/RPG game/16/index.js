

//------------------------------------------------------

function initializeCharacterStates(){  
   return []
} 
const characterStates = initializeCharacterStates();      //Character States Array

//------------------------------------------------------

console.log(`\n2.\n`);

function addCharacterState(name, strength){
   return characterStates.push([name, strength])
}  

addCharacterState("Warrior", 30);
addCharacterState("Mage", 20);
addCharacterState("Troll", 40);
console.log(characterStates);

//------------------------------------------------------

console.log(`\n3.\n`);


findCharacterStrength("Mage");

function findCharacterStrength(characterName){

   for (let i = 0; i < characterStates.length; i++) {
      if (characterStates[i].includes(characterName)) {
         console.log(`Character found. power = `,characterStates[i][1]);
         return;
      }
   }
   console.log(`\nCharacter not found.`);
}

//------------------------------------------------------

console.log(`\n4.\n`);

const newStrength = 35;
updateCharacterStrength("Mage", newStrength);

function updateCharacterStrength(characterName, newStrength){

   for (let i = 0; i < characterStates.length; i++) {
      if (characterStates[i].includes(characterName)) {
         characterStates[i][1] = newStrength;
         console.log(`Character's new power = `,characterStates[i][1]);
         return;
      }
   }
   console.log(`\nCharacter not found.`);
}


//------------------------------------------------------

console.log(`\n5.\n`);


function removeCharacterState(characterName){

   for (let i = 0; i < characterStates.length; i++) {
      if (characterStates[i].includes(characterName)) {
         characterStates.splice(i,1);
      }
   }
}

removeCharacterState("Troll");
console.log(characterStates);

//------------------------------------------------------

console.log(`\n6.\n`);

function listCharacters(){
   for (let i = 0; i < characterStates.length; i++) {
      console.log(`${i+1}. Character's name "${characterStates[i][0]}" - strength ${characterStates[i][1]}\n`);      
   }
}
listCharacters();

//------------------------------------------------------

console.log(`\n7.\n`);

addCharacterState("Warlock", 50);
addCharacterState("Knight", 44);
addCharacterState("Fighter", 42);

strongestCharacter();

function strongestCharacter(){

   if (characterStates.length === 0 ) {
      console.log(`There are no characters`);
      return;
   }

   let highestPowerCharacter = characterStates[0];

   for (let i = 1; i < characterStates.length; i++) {
    
      if (characterStates[i][1] > highestPowerCharacter[1]) {
         highestPowerCharacter[0] = characterStates[i][0];
         highestPowerCharacter[1] = characterStates[i][1];       
      }
   }
   console.log(`The high power character is ${highestPowerCharacter[0]} with the power of ${highestPowerCharacter[1]}`);
}


//Pure Functions
//------------------------------------------------------

console.log(`\n1.\n`);

const ratingArray =  [8.5, 7.9, 6.3, 9.2, 8.1];

let sum = 0;
function calculateAverageRating(array) {
   
   for (let i = 0; i < array.length; i++) {
      sum += array[i];
   }
   return (sum / array.length).toFixed(1);
}
console.log(calculateAverageRating(ratingArray));

//------------------------------------------------------

console.log(`\n2.\n`);

const gameNamesArray = 
['The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo', 
'Final Fantasy VII (1997) - Developed by Square Enix', 
'Halo: Combat Evolved (2001) - Developed by Bungie'];

extractDeveloperNames(gameNamesArray);

function extractDeveloperNames(array) {

   let developersArray = [];

   for (let i = 0; i < array.length; i++) {
      let developerName = array[i].split(`Developed by`)[1];
      developersArray.push(developerName);
   }
      console.log(developersArray);
}

//------------------------------------------------------

console.log(`\n3.\n`);

const gameTitle = 'Final Fantasy VII'; 
const keyWord =  'Fantasy';

console.log(containsWordInTitle(gameTitle,keyWord));

function containsWordInTitle(gameTitle, keyWord) {
   return gameTitle.includes(keyWord);
}

//------------------------------------------------------

console.log(`\n4.\n`);

const gameTitles = ['Assassins Creed','Age of Empires','Animal Crossing'];
console.log(allTitlesStartWithSameLetter(gameTitles));

function allTitlesStartWithSameLetter(gameArray) {
   const index = gameArray[0].charAt(0);
   let flag = true;

   for (const game of gameArray) {
      if (game.charAt(0) !== index) {
         flag = false;
         break;
      }
   }
   return flag;
}

//------------------------------------------------------

console.log(`\n5.\n`);

// Input: ['RPG', 'Action', 'Adventure']

// 6. Count Battles in XP Range
// Input: ([50, 75, 100, 30, 20, 100], 75, 100)

// 7. Find Games Developed by a Specific Developer
// Input Example: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'

// 8. Capitalize the First Letter of Each Game Title
// Input: ['the legend of zelda', 'final fantasy', 'halo: combat evolved']

// 9. Filter Unique XP Values
// Input: [100, 50, 75, 50, 100, 75, 100]

// 10. Sort Game Titles Alphabetically
// Input: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']

// 11. Filter XP by Multiple Criteria
// Input: ([10, 20, 30, 40, 50], greaterThan=20, lessThan=50)

// Bonus Exercises

// 1. Sort Experience Points
// Input: [100, 50, 75, 25, 10]

// 2. Average XP of Top N Battles
// Input: ([50, 10, 100, 75, 25], 3)

// 3. Normalize Experience Points
// Input: ([0, 25, 50, 75, 100], 0, 10)