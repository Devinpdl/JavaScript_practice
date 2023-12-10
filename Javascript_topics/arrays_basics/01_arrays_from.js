const arrayLike = { length: 3, 0: 'one', 1: 'two', 2: 'three' };
const arr = Array.from(arrayLike);
console.log(arr); // Output: ['one', 'two', 'three']

const demoarray = Array.from(Object.entries(arr)); // We use Object.entries to store array in key-value pair
console.log(demoarray);
console.log(demoarray[0][1]);
// Using the mapping function
const doubleArr = Array.from(arr, element => element + element);
console.log(doubleArr); // Output: ['oneone', 'twotwo', 'threethree']

const obj = { name: "SAMUNDRA" };

// Create an array from the keys
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ['name']

// Create an array from the values
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: ['SAMUNDRA']

const entriesArray = Array.from(Object.entries(obj));
console.log(entriesArray); // Output: [['name', 'SAMUNDRA']]

console.log(entriesArray[0][1]);