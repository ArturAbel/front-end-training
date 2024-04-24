

//Only Unique

const array = [1, 3, 5, 6, 3, 9, 2, 1, 7, 8, 3, 1, 9];
const uniqueArray =[];


for (let i = 0; i < array.length; i++) {
   let isUnique = true;
   for (let j = 0 ;j < array.length; j++) {
      if (i !== j && array[i] === array [j]) {
         isUnique = false;
      }
   }
   if (isUnique) {
      uniqueArray.push(array[i]);
   }
}
console.log(uniqueArray.sort());




 


 
