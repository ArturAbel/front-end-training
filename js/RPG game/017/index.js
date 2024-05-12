// 1. Simple Arrow Function Conversion

const getPlayerName = (player) => player.name;

// function getPlayerName(player) {
//    return player.name;
//  }
 

 // 2. Control Flow in Arrow Functions

const getPlayerHealth = (health) => health > 70? "high" : health > 40? "Medium":"Low";

//  function getPlayerHealth(health) {
//    if (health > 70) {
//      return "High";
//    } else if (health > 40) {
//      return "Medium";
//    } else {
//      return "Low";
//    }
//  }
 
 // 3. Arrow Functions with Multiple Operations

const totalInventoryValue = (items) =>{
  let totalValue = 0;
    items.forEach(item => {
    totalValue += item;
  });
  return 'Total inventory value is ' + totalValue;
}
//  function getTotalInventoryValue(items) {
//    let totalValue = 0;
//    for (let i = 0; i < items.length; i++) {
//      totalValue += items[i].value;
//    }
//    return 'Total inventory value is ' + totalValue;
//  }
 
//  // 4. Arrow Functions as Callbacks

const sortedItems = items.sort((a, b) => a-b);

//  const sortedItems = items.sort(function(a, b) {
//    return b.value - a.value;
//  });
 
//  // 5. Implicit Return with Arrow Functions

const getItemNames = items.map((item) => item.name);

// function getItemNames(items) {
//    return items.map(function(item) {
//      return item.name;
//    });
//  }