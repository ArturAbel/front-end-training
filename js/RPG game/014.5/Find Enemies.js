

const arrayRows = 5, arrayColumns = 5;
const gameField = [];
const randomNumLimit = (arrayRows + arrayColumns - 2) / 2;
const enemyMark = `Enemy   `;
const playerMark = 'Player  ';



printFieldInitial(gameField, arrayRows, arrayColumns);
placeCharacters(gameField, arrayRows, arrayColumns, randomNumLimit, enemyMark);
console.log(gameField);
findCharacters(gameField, arrayRows, arrayColumns)


function randomNumber(randomNumLimit) {
   
   let randomNum = Math.random();
   randomNum *= randomNumLimit;
   randomNum = Math.floor(randomNum);
   randomNum += 1;
   return randomNum;
}

function placeCharacters(array, rows, columns,randomNumLimit, enemyMark) {

   let playerSet = false;
   let randomRow = 0;
   let randomColumn = 0;

   console.log(`Reveal characters:`);

   for (let i = 0; i < 3; i++) {
      randomRow = randomNumber(randomNumLimit);
      randomColumn = randomNumber(randomNumLimit);

      if (array[randomRow][randomColumn] === `XXXXXXXX`) {
         array[randomRow][randomColumn] = enemyMark;
      }
      else
      {
         i--;
      }
   }

   while(playerSet === false)
   {
      randomRow = randomNumber(randomNumLimit);
      randomColumn = randomNumber(randomNumLimit);

   if (array[randomRow][randomColumn] === `XXXXXXXX`) {
      array[randomRow][randomColumn] = playerMark;
      playerSet = true;
      }
   }
}

function printFieldInitial(array, rows, columns) {
   
   for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let j = 0; j < columns; j++) {
         array[i][j] = `XXXXXXXX`;
      }
   }
   console.log(gameField);
}

function findCharacters(array, rows, columns) {

   for (let i = 0; i < rows; i++) {
      
      for (let j = 0; j < columns; j++){

         if(array[i][j] !== `XXXXXXXX`){
            console.log(`The ${array[i][j]} is located in row ${i+1} and column ${j+1}`);
         }
      }
   }
}
