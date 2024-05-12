
const gameWorld = {

   players: [],
   enemies: [],
   items: [],
   npcs: [],

   createEntity(name, health, position, inventory){ 
    entity ={
      name: name,
      health: health,
      position: position,
      inventory: inventory,
      }
      return entity;
   },

   createPlayer(entityObj, newPosition){
      entityObj[`position`] = newPosition;
   },

   checkForEncounters() {
      for (const enemy of this.enemies) {
         for (const player of this.players) {
            if (enemy.position === player.position) {
               const enemyHealth = enemy.health;
               const playerHealth = player.health;
               combat(enemyHealth, playerHealth); //Stopped at combat function?? 
            }
         }
      }
   },

   addPlayer(name, health, position, inventory) {
      const player = this.createEntity(name, health, position, inventory);
      this.players.push(player);
   },
   removePlayer(player){
      const playerLocation = this.players.indexOf(player);
     if(playerLocation !== -1) {
         this.players.splice(playerLocation,1);
     }
   },
   addEnemy(name, health, position, inventory){
      const enemy = this.createEntity(name, health, position, inventory);
      this.enemies.push(enemy);
   },
   removeEnemy(enemy){
      const enemyLocation = this.enemies.indexOf(enemy);
      if (enemyLocation !== -1) {
         this.enemies.splice(enemyLocation, 1);
      }
   },
   addItem(item){
      this.items.push(item);
   },
   removeItem(item){
      const itemLocation = this.items.indexOf(item);
      if (itemLocation !== -1) {
         this.items.splice(itemLocation, 1);
      }
   },
   addNpc(name, health, position, inventory){
      const npc = this.createEntity(name, health, position, inventory);
      this.npcs.push(npc);
   },
   removeNpc(npc){
      const npcLocation = this.npcs.indexOf(npc);
      if (npcLocation !== -1) {
         this.npcs.splice(npcLocation, 1);
      }
   },
};

