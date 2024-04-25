
const emptyArray = [];
const theaterRows = 6;
const theaterColumns = 6;
const randomNumLimit = (theaterRows + theaterColumns - 2) / 2;
const emptySit = `XXXXXX`;
const bookedSit = `Booked`;
const yourSit = `You   `

const initialArray = initiateTheater(emptyArray, theaterRows, theaterColumns, emptySit);
const bookedArray = randomBookings(initialArray, randomNumLimit, bookedSit, emptySit);
printTheater(bookedArray);
const chosenSitNumber = [1,2]; //Choosing sit number.
yourBooking(bookedArray,chosenSitNumber, yourSit, emptySit, bookedSit);
printTheater(bookedArray);

// Checks your booking
function yourBooking(theater, sitNumber, yourSit, emptySit, bookedSit) {

   const yourSitRow = sitNumber[0];
   const yourSitCol = sitNumber[1];
   const sitOnLeft = theater[yourSitRow][yourSitCol - 1] ;
   const sitOnRight = theater[yourSitRow][yourSitCol + 1] ;
   const twoSitOnLeft = theater[yourSitRow][yourSitCol - 2] ;
   const twoSitOnRight = theater[yourSitRow][yourSitCol + 2] ;
   let potentialSit = [];

   if (theater[yourSitRow][yourSitCol] !== emptySit &&
      ((twoSitOnLeft !== bookedSit && sitOnLeft === emptySit ) || 
      (twoSitOnRight !== bookedSit && sitOnRight === emptySit ))){
      
      let isFreeSeat = false;
      let noSeat = theater[yourSitRow][yourSitCol] !== emptySit ? `\nThe seat is already booked.` : `\nSorry, cannot book this seat.`;  
      console.log(noSeat);   
      
         for (let i = 0; i < theater[0].length; i++) {

            if (theater[yourSitRow][i] === emptySit &&
               ((theater[yourSitRow][i - 2] !== bookedSit && theater[yourSitRow][i - 1] === emptySit ) || 
               (theater[yourSitRow][i + 2] !== bookedSit && theater[yourSitRow][i + 1] === emptySit ))) 
               potentialSit.push(i+1);
               isFreeSeat = true;
         }

         isFreeSeat === true?console.log(`You can try sit ${potentialSit}\n`):console.log(`There are no free suitable sits`);
      }

   else {
      theater[yourSitRow][yourSitCol] = yourSit;
      console.log(`\nYou have booked successfully! Your seat is ${sitNumber[1] + 1} in row number ${sitNumber[0] + 1}`);
   }
}
// To Cancel
function cancelBooking(theater, sitNumber, emptySit, bookedSit){
   const yourSitRow = sitNumber[0];
   const yourSitCol = sitNumber[1];
   const sitOnLeft = theater[yourSitRow][yourSitCol - 1] ;
   const sitOnRight = theater[yourSitRow][yourSitCol + 1] ;
   const twoSitOnLeft = theater[yourSitRow][yourSitCol - 2] ;
   const twoSitOnRight = theater[yourSitRow][yourSitCol + 2] ;

   if ((twoSitOnLeft === bookedSit && sitOnLeft === emptySit ) || 
      (twoSitOnRight === bookedSit && sitOnRight === emptySit )) {
         console.log(`Sorry it is not possible to cancel this booking.`);
      }
   else{
      sitNumber = emptySit;
      console.log(`Your booking has been canceled.`);
   }
}

// //Random people who booked
function randomBookings(theater, randomNumLimit, sitMark, emptySit) {
   const sitsInRow = theater[0].length - 1;

   for (let i = 0; i < 10; i++) {

      let sitRow = Math.floor(Math.random() * randomNumLimit + 1);
      let sitCol = Math.floor(Math.random() * randomNumLimit + 1);
      let sit = theater[sitRow][sitCol];

      if (sit === emptySit &&
         ((theater[sitRow][sitCol + 2] !== sitMark) ||
         (theater[sitRow][sitCol - 2]!== sitMark))) {

         theater[sitRow][sitCol] = sitMark;
      }
      else
         i--;
   }
   return theater;
}

//Initiate
function initiateTheater(theater, rows, columns, sitMark){
   for (let i = 0; i <rows; i++) {
      theater[i]= [];
     for (let j = 0; j < columns; j++) {
         theater[i][j] = sitMark;
         }
      }
   return theater;
}

//Print the theater
function printTheater(theater) {
   console.log('\t\t[----------screen----------]')
   console.log(theater);
}
