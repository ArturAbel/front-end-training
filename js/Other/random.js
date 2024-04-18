function randomNumber (x) {
x = (Math.random());
x = x * 100;
x = Math.floor(x);
x = x + 1;
return x;
}
console.log(`--------------------------------------`);

let letArray = ["Hello", "nice", "good day", "Good day", "Power Pool"];


for (let i = 0; i < letArray.length; i++) {
   let match = letArray[i].match("day");
   console.log(match);   
}
console.log(letArray.length);   
letArray.push("dance");
console.log(letArray);   
letArray.unshift("Big", "Small")
console.log(letArray);   


let x = 0;
let newArray = [randomNumber(x),randomNumber(x), randomNumber(x), randomNumber(x), randomNumber(x)];
console.log(newArray);

let sum = 0;
for (let i = 0; i < newArray.length; i++) {
   sum += newArray[i];
}
console.log(sum);


let Array1 = [1, 2, 3, 4];
let Array2 = Array1;
console.log(Array2);
Array1.push(3);
Array1 = [1, 2, 3, 4, 5];

console.log(`Array1`,Array1);
console.log(`Array2`,Array2);

Array1 = Array2

Array1.push(6);
Array2.push(4);

console.log(`Array1`,Array1);
console.log(`Array2`,Array2);


let arrayText = ["white", "Black", "Grey"];
if (arrayText.includes("white")) {
   console.log(`Includes string`);
}

const sortArray = ["bab", "Box", "Udall", "type", "merge", "uni", "Tox"];

console.log(sortArray);
console.log(sortArray.sort((a, b) => {
   if (a.toLowerCase() < b.toLowerCase()) return -1;
   if (a.toLowerCase() > b.toLowerCase()) return 1;
 }));






















