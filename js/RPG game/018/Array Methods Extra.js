console.log(`--------------------------------------------\n1.`);


const characters = [
   {name: `John`, level: 2},
   {name: `Jane`, level: 5},
   {name: `Doe`, level: 3},
   {name: `Jack`, level: 1},
   {name: `Jack`, level: 3},
];

function groupCharactersByLevel(obj) {
   let groupByLevel ={};
   obj.forEach((obj)=>{
      const level = obj.level;
      if (!groupByLevel[level]) {
         groupByLevel[level] = [];
      }
      groupByLevel[level].push(obj);
   });
   return groupByLevel;
}

console.log(groupCharactersByLevel(characters));

console.log(`--------------------------------------------\n2.`);

function findHighestLevel(obj) {
   const highestLevel = obj.reduce((max,current)=>max.level>current.level?max:current);

   return highestLevel;
}

console.log(findHighestLevel(characters));

console.log(`--------------------------------------------\n3.`);

function calculateAverageLevel(obj) {
   const averageLevel = obj.reduce((avgSum, current) => avgSum + current.level, 0);
   return averageLevel/obj.length;
}
console.log(calculateAverageLevel(characters));

console.log(`--------------------------------------------\n4.`);

function filterByRange(obj,min,max) {
   const filtered = obj.filter((obj)=>obj.level >= min && obj.level <= max);
   return filtered;
}
console.log(filterByRange(characters, 1, 2));

console.log(`--------------------------------------------\n5.`);

function countCharactersPerLevel(obj) {
   let countLevels = {};
   obj.forEach((obj)=>{
      const level = obj.level;
      !countLevels[level] ? countLevels[level] = 1 : ++countLevels[level];
   })
   return countLevels;
}

console.log(countCharactersPerLevel(characters));

console.log(`--------------------------------------------\n6.`);

const characters2 = [
   { name: 'John', level: 2, skills: ['fire', 'ice'] },
   { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] }
  ];
  

function findCharacterWithMostSkills(obj) {
   const maxSkills = obj.reduce((max, current)=> max.skills.length > current.skills.length ? max : current);
   return maxSkills;
}

console.log(findCharacterWithMostSkills(characters2));

console.log(`--------------------------------------------\n7.`);

function countTotalSkills(obj) {
   const skillsTotal = obj.reduce((total, current)=>total.skills.length + current.skills.length);
   return skillsTotal;
}
console.log(countTotalSkills(characters2));

console.log(`--------------------------------------------\n8.`);

function findUniqueSkills(obj) {
   let uniqueSkills = obj.reduce((accumulate, current) => accumulate = accumulate.concat(current.skills),[]);
  return  uniqueSkills = [...new Set([...uniqueSkills])];
}
console.log(findUniqueSkills(characters2));

console.log(`--------------------------------------------\n9.`);

const skillToFind = 'wind';

function findCharactersWithSkill(obj,index) {

   const findSkill = obj.filter((obj)=> obj.skills.includes(index));
   return findSkill;
}
console.log(findCharactersWithSkill(characters2,skillToFind));