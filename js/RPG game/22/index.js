console.log(`---------------------------------------1`);
//1

const num = 5;

function sumNumbers(n) {
   if (n<=0)return n;
    return sumNumbers(n-1) + n;
}
console.log(sumNumbers(num));


console.log(`---------------------------------------2`);
//2

const word = 'hello';
const newWord = '';

function reverseString(string,reversed) {
if(string.length<= 0) return reversed;
reversed += string[string.length-1];
return reverseString(string.slice(0,-1),reversed);
}

console.log(word,`=>`,reverseString(word,newWord));


console.log(`---------------------------------------3`);
//3


const N = 5;

function recursiveCount(n) {
   if (n < 1) return;
   console.log(n);
   return recursiveCount(n - 1);
}
recursiveCount(N);


console.log(`---------------------------------------4`);
//4


const arrayToPrint =  ['apple', 'cat', 'blue', 'happy', 'book'];

function recursivePrint(array) {
   if(array.length <= 0)return;
   console.log(array.slice(0,1));
   return recursivePrint(array.slice(1,array.length));
}

recursivePrint(arrayToPrint);
