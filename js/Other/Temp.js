

// Generate Random Number
function randomNumber (x) {
x = (Math.random());
x = x * 100;
x = Math.floor(x);
x = x + 1;
return x;
}

console.log(`\n`);
// Makes an array of random numbers
let x = 0;
let newArray = [randomNumber(x),randomNumber(x), randomNumber(x), randomNumber(x), randomNumber(x)];
console.log(newArray);

console.log(`\n`);
// Checks if array includes

let arrayText = ["white", "Black", "Grey"];
if (arrayText.includes("white")) {
   console.log(`Includes string`);
}

console.log(`\n`);
// Sort an array of string
const sortArray = ["bab", "Box", "Udall", "type", "merge", "uni", "Tox"];
console.log(`Unsorted:`,sortArray);
console.log(`\n`);
console.log(`Sorted:`,sortArray.sort((a, b) => {
   if (a.toLowerCase() < b.toLowerCase()) return -1;
   if (a.toLowerCase() > b.toLowerCase()) return 1;
 }));


 console.log(`\n`);
// Check if Pangram
function isPangram(sentence) {
   let lowerCased = sentence.toLowerCase();
   for (const char of `abcdefghijklmnopqrstuvwxyz`) {
      if (!lowerCased.includes(char)) {
         return false;
      }
   }
   return true;
}

