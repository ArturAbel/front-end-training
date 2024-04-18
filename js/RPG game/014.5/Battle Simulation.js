
let playerHP = 100;
let enemyHP = 85;
let playerTurn = false;
const diceSides = 20;


whoStarts(diceSides, playerTurn);

while (playerHP > 0 && enemyHP > 0) {
   
   if (playerTurn === true) {
      enemyHP -= attack(diceSides, playerTurn);
      console.log(`The enemy has ${enemyHP} left.`);
      playerTurn = false;
   }

   else{
      playerHP -=  attack(diceSides, playerTurn);
      console.log(`The player has ${playerHP} left.`);
      playerTurn = true;
   }
}
endGame(playerHP,enemyHP);


 function dice(diceSides) {

   let number = Math.random();
   number *= diceSides;
   number = Math.floor(number);
   number += 1;
   console.log(`\nThe roll is :`,number);
   return number;  
}

function whoStarts(diceSides, playerTurn) {

   let diceThrow = dice(diceSides);
   
   if (diceThrow < 10) {
      playerTurn = true;
      console.log(`This is players turn`);
   }
   else{
      console.log(`This is enemy's turn.`);
   }
   return playerTurn;
}

function attack(diceSides, playerTurn) {
   let attackPower = 0;
   let player;

   attackPower = dice(diceSides);

   if (playerTurn === true) {
      player = "Player";
  } 
  else {
      player = "Enemy";
  }

   if (attackPower > 5) {
      console.log(`The power of the attack of the ${player} is ${attackPower}`);
   }
   else{
      attackPower = 0;
      console.log(`The attack of the ${player} is blocked.`);
   }
   return attackPower;
}

function endGame(playerHP,enemyHP) {
   if (playerHP < 0) {
      console.log(`\nYou lost ---- RIP`);
   }
   else{
      console.log(`\nYou killed the enemy!!!`);
   }
}