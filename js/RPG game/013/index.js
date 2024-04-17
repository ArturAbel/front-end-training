console.log(`-----------------1------------------\n`);

const givenInventory = [`Sword`, `Bow`, `Magic Staff`];
const weaponToCheck = `Sword`;

for (let i = 0; i < givenInventory.length; i++) {
   
   if (givenInventory[i].indexOf(weaponToCheck) !== -1) {
      console.log(`The item is in the inventory.`);
   }
}

if (givenInventory.indexOf != 1) {
   console.log(`The item is in the inventory.`);
}

console.log(`-----------------2------------------\n`);

let questNames = [`Dragon's Lair`, `The Lost Artifact`, `Rescue the Princess`];
const questNamesReverse = [];

for (let i = 0; i < questNames.length; i++) {

   questNamesReverse[questNames.length- 1 - i] = questNames[i];
}
console.log(questNamesReverse);

const questNamesReverse2 = questNames.reverse();
console.log(questNamesReverse2);

console.log(`-----------------3------------------\n`);

const monsterTypes = [`Dragon`, `Goblin`, `Orc`] 

const monsterTypesString = monsterTypes.join(` `);
console.log(monsterTypesString,`---`, typeof monsterTypesString);

console.log(`-----------------4------------------\n`);

const monsterToCheck = `Orc`;
if (monsterTypes.indexOf(monsterToCheck) !== -1) {
   console.log(`The monster is in monster types.`);
}

console.log(`-----------------5------------------\n`);

questNames = questNames.reverse();   //Reversing back from exercise 2;

const specificQuest = 'Rescue the Princess';
if (questNames.indexOf(specificQuest) !== -1 ) {
   console.log(`The quest ${specificQuest} is found in index ${questNames.indexOf(specificQuest)}`);
}
else{
   console.log(`Quest not found.`);
}

console.log(`-----------------6------------------\n`);

const monsterList = [`Dragon`, `Orc`, `Goblin`];
monsterList.pop();
console.log(monsterList);

console.log(`-----------------7------------------\n`);
const newMonster = `Dragon`;           
monsterList.splice(0,2,`Orc`,`Goblin`);    //Adjusting the previous array;
monsterList.unshift(newMonster);
console.log(monsterList);

console.log(`-----------------8------------------\n`);

monsterList.shift();
console.log(monsterList);

console.log(`-----------------9------------------\n`);

const heroList1 = [`Archer`, `Mage`];
const heroList2 = [`Warrior`, `Healer`];

const allHeros = heroList1.concat(heroList2);
console.log(allHeros);

console.log(`-----------------10------------------\n`);

console.log(`Previously`, questNames);
console.log(`Sorted`, questNames.sort());

console.log(`-----------------11------------------\n`);

const spellsString = `Fireball Heal Ice Lance`;
const spell = spellsString.split(` `);

console.log(`Previously "${spellsString}"`);
console.log(`Array`,spell);

console.log(`-----------------12------------------\n`);

questNames.splice(1,1,`Rescue the Princess`)
const n = 2;
const questNamesN = questNames.slice(0,n);

console.log(`Quests`,questNames);
console.log(`N quests`,questNamesN);

console.log(`-----------------13------------------\n`);

monsterList.splice(0,monsterList.length);
console.log(monsterList);

console.log(`-----------------14------------------\n`);

const inventory = [`Sword`, `Shield`];
const newWeapon = `Bow`;

inventory.push(newWeapon);
console.log(inventory);

console.log(`-----------------15------------------\n`);

inventory.splice(0, inventory.length);
inventory.push(`Gold`, `Magic Potion`, `Shield`);
inventory.pop();
console.log(`Inventory -- ${inventory}, first item -- ${inventory[0]}`);

console.log(`-----------------16------------------\n`);

const quests = [`Dragon's Lair`, `Rescue the Princess`];
const newQuest = "Defeat the Goblin king";
quests.push(newQuest);
console.log(quests); 

console.log(`-----------------17------------------\n`);

console.log(`Unsorted`,quests);
console.log(`Sorted`,quests.sort());

console.log(`-----------------18------------------\n`);

const findQuest = `Rescue the Princess`;

if (quests.indexOf(findQuest) !== -1) {
   console.log(`The quest is found in index ${quests.indexOf(findQuest)}`);
}

console.log(`-----------------19------------------\n`);

const score = [30, 80, 60, 90];
const scoreSorted  = score.sort();
console.log(`Unsorted`,score);
console.log(`Sorted`,scoreSorted);