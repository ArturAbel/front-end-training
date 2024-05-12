console.log(`--------------------------------------------\n1.`);

const hero = {
   name:`Aragorn`,
   level:20,
   Class:`Ranger`,
   race:`Human`,  
}

const {name, level, Class} = hero;
console.log(`${name}, ${level}, ${Class}`);

console.log(`--------------------------------------------\n2.`);

let topHeroes = [`Gandalf`, `Lagoglas`, `Frodo`, `Samwise`];
const [hero1, hero2, hero3, hero4] = topHeroes;
topHeroes = [hero4, hero3, hero1, hero2];
console.log(topHeroes);

console.log(`--------------------------------------------\n3.`);

const heroLevels = {
   Aragorn: 20,
   Legolas: 19,
 };
 const updates = {
   Aragorn: 21,
   Legolas: 20,
 };

function updateHeroLevels(heroes,update)  {
return {...heroes,...update}
}  
const updatedHero =  updateHeroLevels(heroLevels,updates);
console.log(updatedHero);

console.log(`--------------------------------------------\n4.`);

 const questList1 = ['Find the ring', 'Save the king', 'Protect the realm'];
 const questList2 = ['Destroy the ring', 'Find the lost city', 'Save the king'];
 const combinedQuestList = Object.values({...questList1,...questList2});
console.log(combinedQuestList);
 
console.log(`--------------------------------------------\n5.`);

 const heroInfo = {
   name: 'Legolas',
   equipment: {
     first: 'Bow of the Galadhrim',
     second: 'Elven dagger',
     third: 'Cloak of Lothlórien',
   },
 };

 const {equipment:{first, second}} = heroInfo;
 console.log(`Item one:${first}\nItem two:${second}`);
 
 console.log(`--------------------------------------------\n6.`);

 const baseDetails = {
   name: 'Gandalf',
   class: 'Wizard',
 };
 
 const extraDetails = {
   level: 25,
   power: 100,
 };

  const fullDetails = {...baseDetails,...extraDetails};
console.log(fullDetails);


console.log(`--------------------------------------------\n7.`);

const heroStats = {
   name: 'Legolas',
   level: 20,
   skills: ['Archery', 'Sneaking', 'Hand-to-hand combat'],
 };
 
const newSkills = [`Ice Barrier`, `Telekinesis`];

function addNewSkills(hero, newSkills) {
   let {skills} = hero;
   return hero.skills = [...skills,...newSkills];
}
addNewSkills(heroStats, newSkills);
console.log(heroStats);

console.log(`--------------------------------------------\n8.`);

 const questLog = [
   ['Defeat the dragon', 'Rescue the princess'],
   ['Rescue the princess', 'Explore the ancient ruins'],
   ['Explore the ancient ruins', 'Discover the hidden treasure'],
 ];
 
function combineQuests(arrayOfArrays) {
   let combinedArray = [].concat(...arrayOfArrays);
   return combinedArray = combinedArray.filter((quest, index, array) => array.indexOf(quest)===index);
}
console.log(combineQuests(questLog));


console.log(`--------------------------------------------\n9.`);


 const adventurers = [
   { name: 'Bilbo', favorites: ['Find the ring', 'Join the dwarves'] },
   { name: 'Frodo', favorites: ['Destroy the ring', 'Visit Rivendell'] },
   { name: 'Aragorn', favorites: ['Protect the hobbits', 'Serve the king'] },
 ];

 function adventurerFirstQuest(array) {
  const firstQuestArray = array.map(({favorites:[first]})=>first);
  return firstQuestArray
}

 console.log(adventurerFirstQuest(adventurers));



 console.log(`--------------------------------------------\n10.`);
 
 const quests = [
   { name: 'Defeat the dragon', difficulty: 8 },
   { name: 'Rescue the princess', difficulty: 5 },
 ];

  const questName = 'Rescue the princess';


function increaseQuestDifficulty(array,questToChange) {

  const updatedDifficulty = array.map(({name,difficulty}) => {
    if (questToChange === name)
        ++difficulty;
  return {name,difficulty};
});
  return updatedDifficulty;
}
console.log(increaseQuestDifficulty(quests,questName));