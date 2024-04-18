
const playerMark = `X`;
const areaMark = `O`; 

const grid = [
   [areaMark,areaMark,areaMark],
   [areaMark,areaMark,areaMark],
   [areaMark,areaMark,areaMark]];
let direction = null;   


grid[1][1] = playerMark;
printBoard(grid);
direction = `up`;
move(grid, direction);
direction = `right`;
move(grid, direction);
direction = `down`;
move(grid, direction);


function printBoard(array,playerStartLocation) {
   
   console.log(`    ${array[0][0]}  |   ${array[0][1]}   |   ${array[0][2]}  `);
   console.log(`-----------------------`);
   console.log(`    ${array[1][0]}  |   ${array[1][1]}   |   ${array[1][2]}  `);
   console.log(`-----------------------`);
   console.log(`    ${array[2][0]}  |   ${array[2][1]}   |   ${array[2][2]}  `);
   console.log(`\n`);
}



function move(grid, direction) {

   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
            
         if (grid[i][j] === `X`) {

               switch (direction) {
                  case `up`:
                     if (i > 0) {
                        grid[i-1][j] =playerMark;
                        grid[i][j] = areaMark;
                        printBoard(grid);   
                     }
                     break;
                  case `down`:
                     if (i < grid.length - 1) {
                        grid[i+1][j] = playerMark;
                        grid[i][j] = areaMark;
                        printBoard(grid);       
                     }
                     break;
                  case `left`:
                     if (j > 0) {
                        grid[i][j-1] = playerMark;
                        grid[i][j] = areaMark;
                        printBoard(grid);      
                     }
                     break;
                  case `right`:
                     if (j < grid[0].length -1) {
                        grid[i][j+1] = playerMark;
                        grid[i][j] = areaMark;
                        printBoard(grid);   
                     }  
                     break;
                  default:
                     console.log(`Invalid move.`);
                  break;
                }
           }
      } 

   }
}



