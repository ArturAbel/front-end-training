console.log(`---------------------------------------------- 1`);

const enemies = [
   {
      id: 10,
      name: "Dark Sorcerer",
      health: 80
   },
   {
      id: 12,
      name: "Wraith",
      health: 100
   },
   {
      id: 14,
      name: "Demon",
      health: 200
   },

];


function processEnemies(enemies,callback) {
   
   //1
   if (!Array.isArray(enemies)) {
      throw new Error('Expected an array of enemies');
   }

   //3
   const newEnemiesArray = JSON.parse(JSON.stringify(enemies));

   //2
   return newEnemiesArray.map((enemy,index)=>{

      if (enemy.hasOwnProperty('name')&& enemy.hasOwnProperty('health')) {
         return callback(enemy);
      }
      else{
         throw new Error(`Enemy at index ${index} is not in the right structure`);
      }
   });
}

// Callback
function callbackFunction(obj) {
   return obj.health += 50;
}

console.log(enemies);
const increaseHealth = processEnemies(enemies,callbackFunction);
console.log(increaseHealth);


console.log(`---------------------------------------------- 2`);


const quests =[
      {
         id: 5,
         name: "The Lost Artifact",
         experience: 100
      },
      {
         id: 6,
         name: "Two Kingdoms",
         experience: 200
      },
      {
         id: 7,
         name: "Enchanted Forest",
         experience: 250
      }
]

function processQuests(quests,callback) {
   
   if (!Array.isArray(quests)) {
      throw new Error('Expected an array of quests');
   }

   const newQuestArray = JSON.parse(JSON.stringify(quests));

   return newQuestArray.map((quest, index)=>{
      if (quest.hasOwnProperty('name')&&quest.hasOwnProperty('experience')) {
         return callback(quest);
      }
      else{
         throw new Error(`Quest of index ${index}, isn't in the right structure`)
      }
   });
}

console.log(quests);
const increaseQuestXp = processQuests(quests, (quest)=>quest.experience += 50);
console.log(increaseQuestXp);


console.log(`---------------------------------------------- 3`);


const players = [
   {
      id: '45e3e',
      name: "Avi",
      health: 120,
      level: 1,
      location: "forest",
      inventory: ["sword", "health potion"]
   },
   {
     id: '45e70',
     name: "Dave",
     health: 80,
     level: 2,
     location: "village",
     inventory: ["staff", "health potion"]
   },
];

function processPlayers(players,callback) {
   
   if (!Array.isArray(players)) {
      throw new Error('Expected an array of players')
   }
   const newPlayers = JSON.parse(JSON.stringify(players));

   return newPlayers.map((player,index)=>{
      if (player.hasOwnProperty('name') && player.hasOwnProperty('health') && player.hasOwnProperty('level') && player.hasOwnProperty('location') && player.hasOwnProperty('inventory')) {
         return callback(player);
      }
      else{
         throw new Error(`Player at index ${index}, is not in the right structure`)
      }
   })
}

function callbackPlayers(obj) {
   return obj.level++
}

console.log(players);
const increasePlayerLevel = processPlayers(players,callbackPlayers)
console.log(increasePlayerLevel);