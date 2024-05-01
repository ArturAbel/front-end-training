// ----------------------------------------------------------
console.log(`1.\n`);


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
   
    addPlayer(player) {
      this.players.push(player);
   },
   removePlayer(player){
      const playerLocation = this.players.indexOf(player);
     if(playerLocation !== -1) {
         this.players.splice(playerLocation,1);
     };
   },
   addEnemy(enemy){
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
   addNpc(npc){
      this.npcs.push(npc);
   },
   removeNpc(npc){
      const npcLocation = this.npcs.indexOf(npc);
      if (npcLocation !== -1) {
         this.npcs.splice(npcLocation, 1);
      }
   },
};

