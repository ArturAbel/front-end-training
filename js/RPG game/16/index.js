

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
         return;
      }
   }
   console.log(`Name not found`);
}

removeCharacterState("Troll");
console.log(characterStates);

//------------------------------------------------------

console.log(`\n6.\n`);

function listCharacters(){
   for (let i = 0; i < characterStates.length; i++) {
      console.log(`${i+1}. Character's name "${characterStates[i][0]} - strength ${characterStates[i][1]}"\n`);      
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


const genresArray = ['RPG', 'Action', 'Adventure'];
console.log(concatenateGenres(genresArray));

function concatenateGenres(array) {
   let concatenatedToString = '';

   for (const genre of array) {
      console.log(array.length -1);
      console.log(array[array.length -1]);

      concatenatedToString += genre;
      if (genre !== array[array.length - 1]) {
         concatenatedToString += `, `;
      }
   }   
   return concatenatedToString;
}

//------------------------------------------------------

console.log(`\n6.\n`);


const xpArray = [50, 75, 100, 30, 20, 100];
console.log(countInXpRange(xpArray, 75, 100));

function countInXpRange(array, lowerXP, upperXP) {
   let counter = 0;
   for (const xpAmount of array) {
      if (xpAmount <= upperXP && xpAmount >= lowerXP ) {
         counter++;
      }
   }
   return counter;
}




//------------------------------------------------------

console.log(`\n7.\n`);


const gameTitles2 = ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'];
const gameDevelopers =  ['Nintendo', 'Square Enix', 'Bungie'];
const index = 'Nintendo';
console.log(findGamesByDeveloper(gameTitles2, gameDevelopers, index));

function findGamesByDeveloper(gameTitles, developersArray, index) {
   const filteredGameDevelopers = [];
   for (let i = 0; i < developersArray.length; i++) {
      if (gameDevelopers[i].includes(index)) {
         filteredGameDevelopers.push(gameTitles[i]);
      }
   }
   return filteredGameDevelopers;
}


//------------------------------------------------------

console.log(`\n8.\n`);

const lowerCaseArray = ['the legend of zelda', 'final fantasy', 'halo: combat evolved'];
const capitalizedArray = capitalizeFirstLetter(lowerCaseArray);

console.log(`Original array:`,lowerCaseArray);
console.log(`New array:`, capitalizedArray);

function capitalizeFirstLetter(array) {
   let  newArray = [];

   for (const game of array) {
      let slicedLetter = '';
      slicedLetter = game.charAt(0).toUpperCase();
      newArray.push(slicedLetter + game.slice(1));
   }
   return newArray;
}


//------------------------------------------------------

console.log(`\n9.\n`);

const arrayWithDuplicates = [100, 50, 75, 50, 100, 75, 100];
const arrayWithoutDuplicates = uniqueXP(arrayWithDuplicates);
console.log(`With duplicates:`,arrayWithDuplicates);
console.log(`Without duplicates:`,arrayWithoutDuplicates);

function uniqueXP(array) {

   let uniqueXpArray = [];
   for (const xpNumber of array) {
      if (uniqueXpArray.includes(xpNumber) === false) {
         uniqueXpArray.push(xpNumber);
      }
   }
   return uniqueXpArray;
}

//------------------------------------------------------

console.log(`\n10.\n`);

const unsortedGameTitles = ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'];
const sortedGameTitles = sortTitlesAlphabetically(unsortedGameTitles);
console.log(`Unsorted:`,unsortedGameTitles);
console.log(`Sorted:`,sortedGameTitles);


function sortTitlesAlphabetically(array) {
   array = array.concat();
   return array.sort();
}

//------------------------------------------------------

console.log(`\n11.\n`);

const xpRangeArray = [10, 20, 30, 40, 50];
const narrowedXPArray = filterXPByCriteria(xpRangeArray, 20, 50)
console.log(narrowedXPArray);

function filterXPByCriteria(array, greaterThen, lessThen) {
   let newArray = [];

   for (const xpNumber of array) {
      if (xpNumber > greaterThen && xpNumber < lessThen) {
         newArray.push(xpNumber);
      }
   }
   return newArray;
}

// Bonus Exercises

//------------------------------------------------------

console.log(`\n1.\n`);

const unsortedXPArray =  [100, 50, 75, 25, 10];
const sortedXPArray = sortXP(unsortedXPArray);
console.log(sortedXPArray);

function sortXP(array) {
   for (let i = 0; i < array.length; i++) {
      let temp = 0;
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }         
      }    
   }
   return array;
}


//------------------------------------------------------

console.log(`\n2.\n`);

const xpPointsArray = [50, 10, 100, 75, 25];
const N = 3;
const xpPointsArrayOfN = averageOfTopNXP(xpPointsArray, N);

console.log(xpPointsArrayOfN);

function averageOfTopNXP(array, N) {
   let averageOfN = 0;
   sortXP(array).reverse();

   for (let i = 0; i < N; i++) {
      averageOfN += array[i];
   }
   return averageOfN / N;
}


//------------------------------------------------------

console.log(`\n3.\n`);


const arrayToNormalize = [0, 25, 50, 75, 100];
const max = 8, min = 2;

console.log(normalizeXp(arrayToNormalize ,max, min));

function normalizeXp(array, max, min){
   const newArray = array;
   sortXP(newArray);

   const arrayMax = newArray[newArray.length - 1];
   const arrayMin = newArray[0];

   for (let i = 0; i < newArray.length; i++) {
      newArray[i] = min + ((newArray[i] - arrayMin) / (arrayMax - arrayMin)) * (max - min);
   }
  return newArray;
}

