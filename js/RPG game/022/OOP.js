
// Character Class
class Character {
   #playerName;
   #level;
   #health;
   #playerInventory =[];

   constructor(playerName, level, health){
      this.#playerName = playerName;
      this.#level = level;
      this.#health = health;
   }

   // Character Getters
   get playerName(){
      return this.#playerName;
   }
   get playerLevel(){
      return this.#level;
   }
   get playerHealth(){
      return this.#health;
   }
   get playerInventory(){
      return this.#playerInventory;
   }
   get getAllItemsValue(){
      return this.#getAllItemsValue();
   }


   // Character Setters
   set playerName(newName){
      if (newName.length === 0) {
      throw new Error(`Name cannot be empty.`);
      }
      this.#playerName = newName;
   }
   set playerLevel(newLevel){
      this._validatePositiveValue(newLevel);
      this.#level = newLevel;
   }
   set playerHealth(newHealth){
      this.#health = newHealth <= 0 ? 0 : newHealth;
   }


   // Validate
   _validatePositiveValue(value){
     if ( value < 0 || typeof value !== 'number') {
         throw new Error('Invalid value')
     }
   }


   // Methods
   addItem(item){
      if (item instanceof Item) {
         this.#playerInventory.push(item);
     } else {
         throw new Error(`Invalid.`);
     }
   }

   #getAllItemsValue(){
      if (this.#playerInventory.length === 0) {
         throw new Error(`The inventory is empty.`)
      }
      else{
         return this.#playerInventory.reduce((acc, item) => acc + item.itemValue, 0);
      }
   }
   
   displayCharacter(){
    return`Name: ${this.playerName}, Level: ${this.playerLevel}, Health: ${this.playerHealth}, Inventory Value: ${this.allItemsValue}`;
   }
}




// Warrior Sub class of Character
class Warrior extends Character{
   #strength
   #defense

   constructor(strength, defense){
      super(playerName, level, health);
      this.#strength = strength;
      this.#defense = defense;
   }

   //Warrior getters
   get strength(){
      return this.#strength;
   }
   get defense(){
      return this.#defense;
   }

   // Warrior setters
   set strength(newStrength){
      super._validatePositiveValue(newStrength);
      return this.#strength = newStrength;
   } 
   set defense(newDefense){
      super._validatePositiveValue(newDefense);
      return this.#defense = newDefense;
   }

   // Methods
   displayCharacter(){
    return `Name: ${super.playerName}, Level: ${super.playerLevel}, Health: ${super.playerHealth}, Inventory Value: ${super.allItemsValue}, Strength: ${this.#strength}, Defense: ${this.#defense}`;
   }
}




// Mage subclass of Character
class Mage extends Character{
   #intelligence;
   #mana;

   constructor(intelligence, mana){
      super(playerName, level, health);
      this.#intelligence = intelligence;
      this.#mana = mana;
   }

   //Mage getters
   get intelligence(){
      return this.#intelligence;
   }
   get mana(){
      return this.#mana;
   }

   set intelligence(newIntelligence){
      super._validatePositiveValue(newIntelligence);
      return this.#intelligence = newIntelligence;
   }
   set mana(newMana){
      super._validatePositiveValue(newMana);
         return this.#mana = newMana;
   }

   // Methods
   displayCharacter(){
      return `Name: ${super.playerName}, Level: ${super.playerLevel}, Health: ${super.playerHealth}, Inventory Value: ${super.allItemsValue}, Strength: ${this.#intelligence}, Defense: ${this.#mana}`;
   }
}



// Item Class
class Item{
   #itemName;
   #value;

   constructor(itemName, value){
      this.#itemName = itemName;
      this.#value = value;
   }

   //Item Getters
   get itemName(){
      return this.#itemName;
   }
   get itemValue(){
      return this.#value;
   }

   // Item Setters
   set itemName(newName){
      if (typeof newName !== 'string' || newName.length === 0) {
         throw new Error(`Please enter a correct name.`)
      }
      else{
         this.#itemName = newName;
      }
   }
   set itemValue(newValue){
      this._validatePositiveValue(newValue);
         this.#value = newValue;
   }

   // Validate
   _validatePositiveValue(value){
      if ( value < 0 || typeof value !== 'number') {
            throw new Error('Invalid value')
      }
   }
}
   



// Weapon Subclass of Item
class Weapon extends Item{
   #damage;
   #type;

   constructor(itemName, value, damage, type){
      super(itemName, value);
      this.#damage = damage;
      this.#type = type;
   }

   // Weapon Getters
   get weaponDetails(){
      return `${super.itemName}, ${this.#type}, ${this.#damage}`;
   }


   //Weapon Setters
   set weaponType(newType){
      if (typeof newType !== 'string' || newType.length === 0) {
         throw new Error(`Please enter a correct type.`)
      }
      else{
         this.#type = newType;
      }
   }
   set weaponDamage(newDamage){
      super._validatePositiveValue(newDamage);
         this.#damage = newDamage;
   }
} 




// Armour Subclass of Item
class Armour extends Item{
   #protection;
   #material;

   constructor(itemName, value, protection, material){
      super(itemName, value);
      this.#protection = protection;
      this.#material = material;
   }

   //Armour Getters
   get armourDetails(){
      return `${super.itemName}, ${this.#material}, ${this.#protection}`;
   }


   // Armour Setters
   set armourMaterial(newMaterial){
      if (typeof newMaterial !== 'string' || newMaterial.length === 0) {
         throw new Error(`Please enter a correct type.`)
      }
      else{
         this.#material = newMaterial;
      }
   }
   set armourProtection(newProtection){
      super._validatePositiveValue(newProtection);
         this.#protection = newProtection;
   }
}




//4. Game class
class Game{
   #characters = [];
   #currentCharacter;
   
   static #instance

   constructor(){
      if (Game.#instance) {
         return Game.#instance;
      }
      Game.#instance = this;
   }

   //Methods
   static getInstance(){
      if (!Game.#instance) {
         Game.#instance = new Game();
      }
      return Game.#instance;
   }

   addCharacter(newCharacter){
      if (newCharacter instanceof Character) {
         this.#characters.push(newCharacter);
      }
      else{
         throw new Error('Invalid')
      }   
   }

    currentCharacter(characterName){
      if (this.#characters.includes(characterName)) {
         this.#currentCharacter = characterName;
      }
      else{
         throw new Error('Character not found');
      }
    }
   
 

}

























//Construct character1
const character1 = new Character('Ben',2,100);
console.log(character1.playerName,character1.playerLevel,character1.playerHealth);

//Set character1 new name and health
character1.playerName = 'Dan';
character1.playerHealth = 70;
console.log(character1.playerName,character1.playerLevel,character1.playerHealth);

//Construct item1
const potion = new Item('Potion', 50);
console.log(potion.itemName, potion.itemValue); 

//Construct weapon1
const sword = new Weapon('Sword', 100, 24, 'Steel');
console.log(sword.weaponDetails);

character1.addItem(potion);
character1.addItem(potion);
console.log(character1.playerInventory);
console.log(`All Items Value:`,character1.getAllItemsValue);
console.log(character1.displayCharacter());


// Creating Game
const game = Game.getInstance();