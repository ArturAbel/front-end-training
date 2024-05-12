const players = [
   {
     name: `Hero`,
     health: 100,
     level: 1,
     location: `forest`,
     inventory: [`sword`, `health potion`],
   },
   {
     name: `Warrior`,
     health: 120,
     level: 2,
     location: `mountain`,
     inventory: [`axe`, `shield`],
   },
   {
     name: `Mage`,
     health: 80,
     level: 3,
     location: `castle`,
     inventory: [`staff`, `spell book`],
   },
   {
     name: `Ranger`,
     health: 90,
     level: 2,
     location: `forest`,
     inventory: [`bow`, `arrows`],
   },
   {
     name: `Thief`,
     health: 70,
     level: 1,
     location: `cave`,
     inventory: [`dagger`, `lockpick`],
   },
 ];
 
 
console.log(`--------------------------------------------\n1.`);


const nameArray = players.map( players => players.name);
console.log(nameArray);


console.log(`--------------------------------------------\n2.`);


const levelArray = players.filter(players => players.level > 2);
console.log(levelArray);


console.log(`--------------------------------------------\n3.`);


const totalHealth = players.reduce((total, playerHealth) => {
   return total + playerHealth.health;
},0);
console.log(totalHealth);


console.log(`--------------------------------------------\n4.`);


const playerNamesLevels = players.map(players => {
   string =  players.name + `-Level ` + players.level;
   return string;
});
console.log(playerNamesLevels);


console.log(`--------------------------------------------\n5.`);


const playerName = `Hero`;
const newPlayerHealth = 150;


const changePlayerHealth = players.forEach((player)=>{
  if (player.name === playerName) {
    player.health = newPlayerHealth;
  }
})

console.log(`--------------------------------------------\n6.`);

const locationIndex = `forest`;

const filteredByLocation = players.filter((player) => player.location === locationIndex);
console.log(filteredByLocation);


console.log(`--------------------------------------------\n7.`);

const averageLevels = players.reduce((total,player)=>{
  return average =  total + player.level / players.length ;
}, 0);

console.log(averageLevels);

console.log(`--------------------------------------------\n8.`);

const sortByHealth = players.sort((playerA,playerB) => playerA.health - playerB.health);
console.log(sortByHealth);

console.log(`--------------------------------------------\n9.`);

const inventoryArray = players.map((player)=>player.inventory);
console.log(inventoryArray);