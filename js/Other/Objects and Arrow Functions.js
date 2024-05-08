// Function inside an object

// createEntity(name, health, position, inventory){
//  entity ={
//    name: name,
//    health: health,
//    position: position,
//    inventory: inventory,
//    }
//    return entity;
// },








// Same function just arrow function
createEntity2: (name, health, position, inventory) => ({
   name: name,
   health: health,
   position: position,
   inventory: inventory
 }),


   const nameArray = players.map(player => player.name);

   const nameArray = players.map(function(player) {
      return player.name;
  });

