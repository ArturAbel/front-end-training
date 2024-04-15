
console.log(`-----------------1--------------------`);

let playerHealth = 20;

if (playerHealth >= 10) {
   console.log(`The player is strong`);
}
else{
   console.log(`The player is weak`);
}

console.log(`-----------------2--------------------`);

const playerGold = 70;

if (playerGold > 1 && playerGold <= 100) {
   console.log(`The player is rich`);
}
else{
   console.log(`The player is poor`);
}

console.log(`-----------------3--------------------`);

const weather = `bad`;
const time = `day`;

console.log(`Should the player continue?`);
{
   if (time === `day`) {
      console.log(`It's a bright day`);
      if (weather === `good`) {
         console.log(`The player continues`);
      }
      else {
         console.log(`But the weather is bad.`);
      }
   } 
   else {
      console.log(`The player can't continue at night.`);
   }
   console.log(`The player wont continue.`);
}

console.log(`-----------------4--------------------`);

const playerWeapon = "new"; //330
const enemyWeapon = "OLD"; //223

if (playerWeapon === enemyWeapon) {
   console.log(`Weapons clash!`);
}  
else if (playerWeapon > enemyWeapon){
   console.log(`Player wins.`);
}
else{
   console.log(`Player looses.`);
}

console.log(`-----------------5--------------------`);

let playerAge = 17;

if (playerAge > 13 && playerAge < 19) {
   console.log(`Player age is between 13 and 19`);
}

console.log(`-----------------6--------------------`);

const gameScore = 56;
let highScore = 50;

highScore = gameScore >= highScore ? console.log(`The new high score is ${gameScore}`) : console.log(`${gameScore} is less then the high score`);

console.log(`-----------------7--------------------`);

const numOfEnemies = 5;

if (numOfEnemies % 2 == 0 ? console.log(`The number of enemies is even`) : console.log(`The number of enemies is odd`));

console.log(`-----------------8--------------------`);

const characterAge = 23;

if(characterAge <  12 ? console.log(`Youngling`) : characterAge >= 20  ? console.log(`Adult`) : console.log(`Adolescent`));

console.log(`-----------------9--------------------`);

const battleSkill = 99;

if(battleSkill >= 70 ? console.log(`Skilled warrior`) : console.log(`Train harder`));

console.log(`-----------------10--------------------`);

const sessionDuration = 95;

if (sessionDuration >= 150) {
   console.log(`Marathon`);
}
else if(sessionDuration <= 150 && sessionDuration >= 90){
   console.log(`Moderate`);
}
else{
   console.log(`Short`);
}

console.log(`-----------------11--------------------`);

const totalPotions = 10;
const usedPotions = 8;

if ((totalPotions - usedPotions) > 0) {
   console.log(`There are ${totalPotions-usedPotions} potions left`);
}
else{
   console.log(`No potions left.`);
}

console.log(`-----------------12--------------------`);

playerAge = 18;
const questAgeRestriction = 18;

if (playerAge >= questAgeRestriction) {
   console.log(`You pass the age requirements.`);
}
else{
   console.log(`You do not pass the age requirements`);
}

console.log(`-----------------13--------------------`);

const dayOfWeek = `Sunday`;

if (dayOfWeek === `Saturday` || dayOfWeek === `Sunday`) {
   console.log(`Spacial event is happening!`);
}
else{
   console.log(`Spacial event happens only on Saturday and Sunday`);
}

console.log(`-----------------14--------------------`);

const gameSettingYear = 1900;

if (gameSettingYear >= 1200 && gameSettingYear <= 1500 ? console.log(`Game is in the medieval era`) : console.log(`Different historical era`));

console.log(`-----------------15--------------------`);

const characterClass = "Warrior";
const characterLevel = 34;

if (characterClass === "Warrior" && characterLevel >= 10) {
   console.log(`The character is powerful`);
}
else{
   console.log(`The character is not powerful`);
}

console.log(`-----------------16--------------------`);

playerHealth = 75;
const enemyCount = 3;

if (playerHealth >= 50 && enemyCount <= 3) {
   console.log(`You are ready for battle`);
}
else{
   console.log(`Proceed with caution`);
}

console.log(`-----------------17--------------------`);

const questProgress = 100;
const questDifficulty = 5;

if (questProgress === 100 && questDifficulty <= 5) {
   console.log(`Completed the quest.`);
}
else{
   console.log(`Have not completed the quest.`);
}

console.log(`-----------------18--------------------`);

const inventorySize = 80;

if (inventorySize >= 90) {
   console.log(`Inventory almost full`);
}
else{
   console.log(`Plenty of space in the inventory`);
}
