// Write a function calculateAverage that takes an array of numbers as an argument and returns
//  the average (mean) of those numbers.

const calculateAverage = (arr) =>
  arr.length ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length : 0;

// Examples
console.log(calculateAverage([3, 7, 10, 5])); // Output: 6.25
console.log(calculateAverage([12, 18, 25, 8])); // Output: 15.75
console.log(calculateAverage([2, 4, 6, 8])); // Output: 5
