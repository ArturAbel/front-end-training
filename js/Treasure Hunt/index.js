

const gameGridColumns = 10;
const gameGridRows = 10;
let moves = 20;
let score = 0;


document.addEventListener("DOMContentLoaded", function () {

   let gridCells = initializeGrid(gameGridColumns, gameGridRows);
   let playerIndex = initiateGameItems(gridCells, gameGridColumns, gameGridRows);


   function initializeGrid(columns, rows){
      const grid = document.getElementById(`grid`);
      let Cells = [];

      for (let i = 0; i < rows; i++) {
         for (let j = 0; j < columns; j++) {
            const cell = document.createElement(`div`);
            cell.classList.add(`cell`);
            grid.appendChild(cell);
            Cells.push(cell);  
         }
      }
      return Cells;
   }

   function randomNumber(rows,columns) {
      const totalNumber = rows * columns;
      return Math.floor(Math.random()*totalNumber);
   }

   function initiateGameItems(cells, columns, rows) {
      let randomIndex = randomNumber(rows,columns);
      cells[randomIndex].classList.add(`player`);
      let player = randomIndex;

      let counter = 0;

      while (counter < 5) {
         randomIndex = randomNumber(rows,columns);
         if (!cells[randomIndex].classList.contains(`player`)) {
            cells[randomIndex].classList.add(`treasure`);
            counter++;
         }
      }
      counter = 0;

      while (counter < 5) {
         randomIndex = randomNumber(rows,columns);
         if (!cells[randomIndex].classList.contains(`player`) && !cells[randomIndex].classList.contains(`treasure`)) {
            cells[randomIndex].classList.add(`trap`);
            counter++;
         }
      }
      return player;
   }

   function movePlayer(direction) {
      
      switch (direction) {
         case 'up':
            if (playerIndex > 0) {
               gridCells[playerIndex].classList.remove(`player`);
               playerIndex -= gameGridRows;
            }
            break;

         case 'down':
            if (playerIndex + gameGridRows <= gameGridRows * gameGridColumns) {
               gridCells[playerIndex].classList.remove(`player`);
               playerIndex += gameGridRows;
            }
            break;

         case 'left':
            if (playerIndex % gameGridColumns !== 0) {
               gridCells[playerIndex].classList.remove(`player`);
               playerIndex -= 1;
            }
            break;

         case 'right':
            if ((playerIndex + 1) % gameGridColumns !== 0) {
               gridCells[playerIndex].classList.remove(`player`);
               playerIndex += 1;
            }
            break;
      }
      gridCells[playerIndex].classList.add(`player`);
      moves--;
      updateMoves(moves);
      scorePoints(gridCells[playerIndex]);
   }

   function updateMoves(movesLeft) {
      const moveDisplayed = document.getElementById(`moves`);
      if (movesLeft > 0) {
         moveDisplayed.textContent = movesLeft;
         return;
      }
   }

   function scorePoints(gridCell) { 

      const scoreDisplayed = document.getElementById(`score`);
      if (gridCell.classList.contains(`treasure`)) {
         score++;
         gridCell.classList.remove(`treasure`)
      }
      else if (gridCell.classList.contains(`trap`)) {
         score--;
         gridCell.classList.remove(`trap`)
      }
      scoreDisplayed.textContent = score;
      return;
   }

   window.movePlayer = movePlayer;
});