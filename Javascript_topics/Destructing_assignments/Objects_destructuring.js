// Example 1: Basic Object Destructuring
let person = { name: "John", age: 30, occupation: "Engineer" };
let { name, age, occupation } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(occupation); // Output: Engineer

// Example 2: Renaming Variables in Object Destructuring
let user = { username: "jsmith", email: "jsmith@example.com" };
let { username: userAlias, email: userEmail } = user;

console.log(userAlias); // Output: jsmith
console.log(userEmail); // Output: jsmith@example.com

let processPerson = ({ name = "Anonymous", age = 25, occupation = "Unknown" } = {}) => {
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
};
console.log(processPerson()); 
/*
In this function, the parameter is an object, and the properties name, age, and occupation are being extracted with default
values. If the object passed to the function doesn't have one or more of these properties, the default values are used.
The = {} ensures that if the argument is undefined, it defaults to an empty object, preventing errors during the 
destructuring assignment inside the function.  It's a defensive mechanism to handle cases where the argument might be missing 
or explicitly set to undefined. 
2) = {}: This is the default value for the entire parameter. If no argument is provided when calling the function 
or if the argument is explicitly undefined, an empty object {} is used as the default value for the entire parameter. 
This prevents errors during the destructuring assignment, ensuring that you can safely access properties even if the 
argument is missing.
*/

/* Without = {} in the parameter
let processPersonWithoutDefault = ({ name = "Anonymous", age = 25, occupation = "Unknown" }) => {
 return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
};
console.log(processPersonWithoutDefault()); // Error: Cannot destructure property 'name' of 'undefined' or 'null'.

In this case, calling the function without an argument leads to an error because you're trying to destructure properties
from an undefined or null object, and there is no default value provided to handle this situation.

By including = {} in the parameter, you ensure that if the argument is missing or explicitly set to undefined,
it defaults to an empty object, and the destructuring assignment can proceed without causing an error. 
The default object {} serves as a safeguard, preventing unexpected errors during the destructuring process.

*/
console.log(typeof processPerson);
