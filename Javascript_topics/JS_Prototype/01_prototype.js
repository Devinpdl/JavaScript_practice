// Prototype in JavaScript

// 1. Prototype Chain

// Every object in JavaScript has a prototype except the base object.
// Prototype basically see if there's a method in the parent clas.So, there's a proper chaining of prototypes.
//Even the JS bult-in object has prototypes to see if there's another method / prototypes defined inside another class.
// The prototype is accessed using the __proto__ property.

// Example: Checking the prototype chain
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 25);
console.log(person1.__proto__ === Person.prototype); // Output: true

// 2. Constructor Functions and Prototypes

// When you create an object using a constructor function, 
// the prototype of the object is set to the prototype property of the constructor function.

// Example: Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

person1.greet(); // Output: Hello, my name is John

// 3. Adding Methods to Prototypes

// You can add methods to the prototype, and all instances of the constructor function will share these methods.

// Example: Prototype inheritance
function Student(name, age, grade) {
    // Call the constructor of the parent (superclass)
    Person.call(this, name, age);
    this.grade = grade;
}

// Set the prototype of Student to an instance of Person
Student.prototype = Object.create(Person.prototype);

const student1 = new Student('Alice', 20, 'A');
student1.greet(); // Output: Hello, my name is Alice

// 4. Prototype Inheritance

// Objects can inherit properties and methods from their prototype, creating a chain of inheritance.

// Example: Object.create() method
// Example: Object.create() method
const newObject = Object.create(null);
// // Example: Using the instanceof operator
// if (objectInstance instanceof someConstructorFunction)
// Summary:
// - The __proto__ property holds a reference to the object’s prototype.
// - A constructor function's prototype property holds a reference to another object that will be used as its prototype.
// - A constructor function's prototype property is used as the prototype for objects created by that constructor.
