

// Generate Random Number
function randomNumber (x) {
x = (Math.random());
x = x * 100;
x = Math.floor(x);
x = x + 1;
return x;
}





// Makes an array of random numbers
let x = 0;
let newArray = [randomNumber(x),randomNumber(x), randomNumber(x), randomNumber(x), randomNumber(x)];
console.log(newArray);







// Checks if array includes
let arrayText = ["white", "Black", "Grey"];
if (arrayText.includes("white")) {
   console.log(`Includes string`);
}








// Sort an array of string
const sortArray = ["bab", "Box", "Udall", "type", "merge", "uni", "Tox"];
console.log(`Unsorted:`,sortArray);
console.log(`\n`);
console.log(`Sorted:`,sortArray.sort((a, b) => {
   if (a.toLowerCase() < b.toLowerCase()) return -1;
   if (a.toLowerCase() > b.toLowerCase()) return 1;
 }));










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








// Math expression
const string = "2 + 3 * 4 + 2";

function math(num) {
  num = num.replaceAll(" ", "").split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === "*") {
      num[i] = Number(num[i]) * Number(num[i + 2]);
      num.splice(i + 1, 2);
      i = i - 2;
    } else if (num[i + 1] === "/") {
      num[i] = Number(num[i]) / Number(num[i + 2]);
      num.splice(i + 1, 2);
      i = i - 2;
    }
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === "+") {
      num[i] = Number(num[i]) + Number(num[i + 2]);
      num.splice(i + 1, 2);
      i = i - 2;
    } else if (num[i + 1] === "-") {
      num[i] = Number(num[i]) - Number(num[i + 2]);
      num.splice(i + 1, 2);
      i = i - 2;
    }
  }
  
  return num[0];
}
console.log(math(string));







const writtenString = "zero nine five one";

function wordsToNumbers(string) {
   string = string.split(' ');
   const words = ['zero','one','two','three','four','five','six','seven','eight','nine'];

   if (!string.every((word) => words.includes(word))) {
      console.log(`Incorrect input`);
      return "n/a";
   }
   
   const numbers = string.map(word => {
   return word = words.indexOf(word)}).reduce((acc,cu)=>acc+cu);
   return words[Math.floor(numbers/string.length)];
}

console.log(wordsToNumbers(writtenString));








// const years = 10;

// function cows(n) {
  
//   if (n <= 0) return n;
//   console.log(n);
//   return cows (n - 1) + n;
// }



// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

