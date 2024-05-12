// ----------------------------------------------------------
console.log(`1.\n`);

const character = {
   name: ``,
   class: ``,
   level: 0,
   ability: [],
   states: {
      strength: 0,
      dexterity: 0,
      intelligence: 0,
   },
   getOverallStrength(){
      return `${this.states.strength + this.states.dexterity + this.states.intelligence}`
   }

}
// ----------------------------------------------------------
console.log(`2.\n`);

const equipment = {
   weapon: ``,
   armour: ``,
   accessories: [],
} 

const equippedCharacter = {...character, ...equipment};
equippedCharacter.ability.push(`Power Attack`);          //Dot notion
console.log(equippedCharacter);
equippedCharacter[`ability`].push(`Blessed`);            //Bracket notion
console.log(equippedCharacter);
equippedCharacter.armour = `Heavy Armour`;
console.log(equippedCharacter);
equippedCharacter[`armour`] = `Medium Armour`;
console.log(equippedCharacter);

// ----------------------------------------------------------
console.log(`3.\n`);

equippedCharacter.level = 10;
equippedCharacter.ability.push(`Prophecy`);
equippedCharacter.weapon = `Sword`;
equippedCharacter[`weapon`] = `spear`;
console.log(equippedCharacter);

// ----------------------------------------------------------
console.log(`4.\n`);

const characters = [
   { name: 'Eldrin', 
   attributes: { health: 100, mana: 50 } },

   { name: 'Mira', 
   attributes: { health: 85, mana: 60 } },
 ];

 console.log(`Print first character's health:`, characters[0].attributes.health);

 function averageHealth(charactersObject) {
	let totalHealth = 0;	
	for (const character of charactersObject) {
		totalHealth += character.attributes.health;
	}
	return totalHealth / characters.length;
}

console.log(`The average health is:`, averageHealth(characters));
   

// ----------------------------------------------------------
console.log(`5.\n`);

const character1 = {
   name: `Ravin`,
   class: `Mage`,
   level: 10,
}

const character2 = {
   name: `David`,
   class: `Mage`,
   level: 12,
}

const mergedCharacters = {character1:{...character1},character2:{...character2}};
console.log(mergedCharacters);

Object.freeze(mergedCharacters);                                  //Object.freeze
Object.seal(mergedCharacters);                                    //Object.seal

console.log(Object.isFrozen(mergedCharacters));                   //Object.isFrozen
console.log(Object.isSealed(mergedCharacters));                   //Object.isSealed

// ----------------------------------------------------------
console.log(`6.\n`);

const characterStats = {
   name: 'Eldrin',
   class: 'Mage',
   level: 7,
   health: 100,
   mana: 200,
 };

Object.keys(characterStats).forEach(key => console.log(key, characterStats[key])); //Object.keys


// ----------------------------------------------------------
console.log(`7.\n`);

const gameScores = {
   "Eldrin": 950,
   "Mira": 1200,
   "Thorn": 800,
 };

 function increaseXP(object,index) {
   for (const [key, value] of Object.entries(object)) {          //Object.entries
      if (key === index && value < 1000) {
         object[key] +=100;
      }
   }
   return object;
 }

 console.log(increaseXP(gameScores,"Thorn"));

 
 // ----------------------------------------------------------
console.log(`8.\n`);

const quests = {
   1: { name: 'Find the Lost Sword', difficulty: 'Easy', reward: '100 gold' },
   2: { name: 'Defeat the Dragon', difficulty: 'Hard', reward: '500 gold' },
   3: { name: 'Escort the Merchant', difficulty: 'Medium', reward: '250 gold' },
 };

function findHardQuests(object) {
   for (const [key, value] of Object.entries(object)) {
      for (const [innerKey, innerValue] of Object.entries(value)) {
         if (innerKey === `difficulty` && innerValue === `Hard`) {
            value.isHard = true;
         }
      }
   }
   return object;
 }
 console.log(findHardQuests(quests));

  // ----------------------------------------------------------
console.log(`9.\n`);

const skillLevels = {
   Ranger: [8, 9, 7, 10, 8.5],
   Mage: [8.5, 8, 9, 9.5, 7.5],
   Warrior: [7, 7.5, 8, 8.5, 9],
 };

displaySkillAverage(skillLevels);

function displaySkillAverage(object) {
   for (const key of Object.keys(object)) {
      let average = 0
      for (const level of Object.values(object[key])) {
         average += level;
      }
      average /= object[key].length;
      console.log(`${key} = ${average}`);
   }
}

  // ----------------------------------------------------------
  console.log(`10.\n`);

  const questRewards = {
   'Find the Lost Sword': 'Legendary Weapon',
   'Defeat the Dragon': 'Epic Armor',
   'Escort the Merchant': 'Gold',
   'Discover the Ancient Ruins': 'Legendary Weapon',
 };


const newQuest = {};
Object.entries(questRewards).forEach(([quest, reward]) => {   //Turning the values to Array to prevent overwriting 
  if (newQuest[reward]) {
    newQuest[reward].push(quest);
  } else {
    newQuest[reward] = [quest];
  }
});
console.log(newQuest);
 
