// Complex object with various properties
let complexObject = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Software Developer"
};

// Function using destructuring with default values
let processPerson = ({ name = "Anonymous", age = 25, occupation = "Unknown" } = {}) => {
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
};

// Example usage with various arguments
console.log(processPerson());  // Uses all default values
console.log(processPerson({ name: "Alice" }));  // Overrides only the name
console.log(processPerson({ age: 28, occupation: "Teacher" }));  // Overrides age and occupation
console.log(processPerson(complexObject));  // Uses values from the complex object
