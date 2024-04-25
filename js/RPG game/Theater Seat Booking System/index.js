
const emptyArray = [];
const theaterRows = 6;
const theaterColumns = 6;
const randomNumLimit = (theaterRows + theaterColumns - 2) / 2;
const emptySeatMark = `XXXXXX`;
const bookedSeatMark = `Booked`;
const yourSeatMark = `You   `;

const initialArray = initiateTheater(emptyArray, theaterRows, theaterColumns, emptySeatMark);
const bookedArray = randomBookings(initialArray, randomNumLimit, bookedSeatMark, emptySeatMark);
const chosenSitNumber = [1,2]; //Choosing sit number.
yourBooking(bookedArray,chosenSitNumber, yourSeatMark, emptySeatMark, bookedSeatMark);
printTheater(bookedArray);



// Check if seat is empty
function checkIfEmptySeat(theater,sitNumber,emptySeatMark ) {
   const checkedSeatRow = sitNumber[0];
   const checkedSeatCol = sitNumber[1];
   let isEmpty = false;

   if (theater[checkedSeatRow][checkedSeatCol] === emptySeatMark) {
      isEmpty= true;
   }
   return isEmpty;
}

// Check if there is no gap between seats
function checkIfGap(theater,sitNumber, emptySeatMark, bookedSeatMark) {
   const yourSeatMarkRow = sitNumber[0];
   const yourSeatMarkCol = sitNumber[1];
   const sitOnLeft = theater[yourSeatMarkRow][yourSeatMarkCol - 1] ;
   const sitOnRight = theater[yourSeatMarkRow][yourSeatMarkCol + 1] ;
   const twoSitOnLeft = theater[yourSeatMarkRow][yourSeatMarkCol - 2] ;
   const twoSitOnRight = theater[yourSeatMarkRow][yourSeatMarkCol + 2] ;
   let isGap = false;

   if ((twoSitOnLeft === bookedSeatMark && sitOnLeft === emptySeatMark)|| 
      (twoSitOnRight === bookedSeatMark && sitOnRight === emptySeatMark)){
      isGap = true;
   }
    return isGap;  
}

// Checks your booking
function yourBooking(theater, sitNumber, yourSeatMark, emptySeatMark, bookedSeatMark) {

   const yourSeatMarkRow = sitNumber[0];
   const yourSeatMarkCol = sitNumber[1];
   let potentialSit = [];
   let isPotentialFreeSeat = false;
   let isEmptySeat = checkIfEmptySeat(theater, sitNumber,emptySeatMark);
   let isGap = checkIfGap(theater,sitNumber, emptySeatMark, bookedSeatMark);

   if (isEmptySeat && isGap){

      let noSeat = theater[yourSeatMarkRow][yourSeatMarkCol] !== emptySeatMark?`\nThe seat is already booked.`:`\nSorry, cannot book this seat.`;  
      console.log(noSeat);   
      
      for (let i = 0; i < theater[0].length; i++) {
         isEmptySeat = checkIfEmptySeat(theater, [yourSeatMarkRow, i], emptySeatMark);
         isGap = checkIfGap(theater, [yourSeatMarkRow, i], emptySeatMark, bookedSeatMark);
         if (isEmptySeat && !isGap) {

            potentialSit.push(i + 1);
            isPotentialFreeSeat = true;
         }
     }
         isPotentialFreeSeat === true?console.log(`You can try sit ${potentialSit}\n`):console.log(`There are no free suitable sits`);
      }
   else {
      theater[yourSeatMarkRow][yourSeatMarkCol] = yourSeatMark;
      console.log(`\nYou have booked successfully! Your seat is ${sitNumber[1] + 1} in row number ${sitNumber[0] + 1}`);
   }
}

// To Cancel
function cancelBooking(theater, sitNumber, emptySeatMark, bookedSeatMark){

   let isGap =  checkIfGap(theater,sitNumber, emptySeatMark, bookedSeatMark);
   if (isGap) {
         console.log(`Sorry it is not possible to cancel this booking.`);
      }
   else{
      sitNumber = emptySeatMark;
      console.log(`Your booking has been canceled.`);
   }
}

// //Random people who booked
function randomBookings(theater, randomNumLimit, sitMark, emptySeatMark) {
   for (let i = 0; i < 10; i++) {
       let sitRow = Math.floor(Math.random() * randomNumLimit + 1);
       let sitCol = Math.floor(Math.random() * randomNumLimit + 1);
       let seat = theater[sitRow][sitCol];

       let isGap = checkIfGap(theater, [sitRow, sitCol], emptySeatMark, sitMark);

       if (seat === emptySeatMark && !isGap) {
           theater[sitRow][sitCol] = sitMark;
       } else {
           i--;
       }
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
