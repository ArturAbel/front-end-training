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
// createEntity2: (name, health, position, inventory) => ({
//    name: name,
//    health: health,
//    position: position,
//    inventory: inventory
//  }),


//    const nameArray = players.map(player => player.name);

//    const nameArray = players.map(function(player) {
//       return player.name;
//   });



const string = "  hello world nice bro good ";

const capitalized = (sentence) => {
   sentence = sentence.trim().split(' ');
   return sentence.map(word  =>  word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalized(string));




const items = ['iron sword', 'healing potion', 'steel shield', 'iron helm'];

const filteredItems = items.filter(item => item.includes('iron'));

console.log(`Filtered Items:`,filteredItems);

