console.log(`--------------------------------------------------- 1`);


function createPlayerCharacter(name, initialLevel) {
	let level = initialLevel;
	let xp = 0;

	return {
		name, level, xp,
		levelUp() {
			level++;
			console.log(`${name} leveled up to level ${level}!`);
		},

		addXP(amount) {
			xp += amount;
			console.log(`${name} gained ${amount} XP!`);
		},
	};
}


const player1 = createPlayerCharacter(`player1`, 1);
console.log(player1.addXP(50));
console.log(player1);


console.log(`--------------------------------------------------- 2`);


function createInventory() {
   const inventory = [];

   return{
      inventory,

      addItem(item){
         inventory.push(item);
         console.log(`${item} was added to the inventory`);
      },
      removeItem(item){
         const itemIndex = inventory.indexOf(item); 
         if (item !== -1) {
            inventory.splice(itemIndex,1);
            console.log(`${item}, was removed from the inventory`);
         }
         else{
            console.log(`${item}, is not in the inventory`);
         }
      },
      getItems(){
         console.log(`Items:`,inventory);
      }
   }
}

const inventory1 = createInventory();
inventory1.addItem(`sword`);
inventory1.addItem(`shield`);
console.log(inventory1);
inventory1.removeItem(`sword`);
console.log(inventory1);
inventory1.getItems();


console.log(`--------------------------------------------------- 3`);


function createAbility(name, power) {
   return{
      abilityName:name,
      abilityPower:power,
      useAbility(){
         console.log(`You have used ${name} with the power of ${power}`);
      }
   }
}

const ability1 = createAbility(`Pyrokinesis`,50);
console.log(ability1);
ability1.useAbility();


console.log(`--------------------------------------------------- 4`);

function createEnemy(name, health) {
   let isAlive = true;

   return{
      enemyName: name,
      enemyHealth: health,

      attack(){
         console.log(`The enemy is attacking.`);
      },

      reduceHealth(damage){
         health -= damage;
         if (health <= 0) {
            console.log(`The enemy has been defeated.`);
            isAlive = false;
         }
         else{
            console.log(`The enemy left with ${health} after sustaining a damage of ${damage}.`);
         }
      },

      isDefeated() {
         return !isAlive;
      }
   };
}

const enemy1 = createEnemy(`troll`,100);
console.log(`Is defeated?`,enemy1.isDefeated());
enemy1.attack();
enemy1.reduceHealth(40);
enemy1.reduceHealth(60);
console.log(`Is defeated?`,enemy1.isDefeated());
