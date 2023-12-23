const fruits = ['Apple', 'Mango', 'Banana', 'Papaya'];
const Juice = ['Pepsi', 'Cococola', 'Sprite','Fanta'];

// fruits.push(Juice);
// console.log(fruits);
// console.log(fruits[4][2]);
// console.log(fruits.length);

// const arr=fruits.concat(Juice);
// console.log(arr);
// console.log(arr[1]);

//Now using Spread(...) Operator

const newArr=[...fruits, ...Juice];
console.log(newArr);
console.log(newArr[3]);

//Now understanding inner arrays

const another_arr = [1,2,3,['Hero', 4,5,6, [7,8,9,[10,11,12,'Me']]]];
console.log(another_arr[3][4][3][3]); //'Me'
console.log(another_arr[3][0]);

const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);
console.log(typeof(real_another_arr[3]));
console.log(typeof(real_another_arr[2]));
console.log(typeof(real_another_arr));
/*
In JavaScript, the typeof operator is not a very reliable way to determine the type of an object, especially for arrays.
The typeof operator returns a string indicating the type of the operand, and for arrays, it will return 'object'.
*/

//To know the output is array or not we use Array.isArray() method

console.log(Array.isArray(real_another_arr)); // must return true

console.log(Array.isArray("SAMUNDRA")); // false
console.log(Array.from("SAMUNDRA", char => {
    // your custom logic here if needed
    return char;
  })); // ['S', 'A', 'M', 'U', 'N', 'D', 'R', 'A']


  // Now let us create a function to check whether an element exists in the array or not
function searchElement(array, element) {
  return array.includes(element);
}

// Example usage
const result = searchElement(newArr, 'Sprite');
console.log(result); // true

//Another example Array.of

let num1= 20;
let num2= 30;
let num3= 40;
let arrOfNum = Array.of(num1, num2, num3); 
console.log(arrOfNum); // [20, 30, 40]

/*
Array.of() is a static method that creates a new array instance from a variable number of arguments.

It is particularly useful when you want to create an array with a single numeric argument,
avoiding the pitfalls of Array() constructor behavior.
*/