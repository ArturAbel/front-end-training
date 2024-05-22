const arr = ['a', 'b', 'c', 'd'];

const word = arr.reduceRight((acc,cur) => acc+cur);
console.log(word);



const string = '3h 45min';
const num = string.split('').filter(letter => +letter).map(number => +number);
console.log(`${num[0]}h ${num[1]}${num[2]}min`);



const numbers = string.match(/\d+/g).map(number => +number);
console.log(`${numbers[0]}h ${numbers[1]}min`);