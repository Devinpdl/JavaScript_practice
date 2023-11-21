// Example 1: Basic Array Destructuring
let numbers = [1, 2, 3];
let [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Example 2: Skipping elements in Array Destructuring
let colors = ["red", "green", "blue"];
let [, , thirdColor] = colors;

console.log(thirdColor); // Output: blue