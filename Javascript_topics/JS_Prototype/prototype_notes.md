# Prototypes in JavaScript

In JavaScript, each object has a prototype, which is an object from which it inherits properties. The prototype chain allows objects to inherit properties and methods from their prototype.

## 1. Prototype Chain

Every object in JavaScript has a prototype except the base object. The prototype is accessed using the `__proto__` property.

```javascript
// Example: Checking the prototype chain
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 25);
console.log(person1.__proto__ === Person.prototype); // Output: true

Person.prototype.gender = 'male';
const person2 = new Person('Jane', 30);
console.log(person2.__proto__ === person1.__proto__); // Output: false
//          Output: true (if we use Object.getPrototypeOf())
console.log(person2.__proto__.isPrototypeOf(person2)); // Output: true

Object.setPrototypeOf(person2, person1);
console.log(person2.__proto__ === person1.__proto__); // Output: true
// The IsPrototypeOf() method returns a Boolean value that indicates whether an object has a specified property directly or through its prototype chain. It
// Adding a method to the prototype of all objects created from the Person function
Person.prototype.sayHello = function() { console.log(`Hi! My name is ${this.name}`); };
person1.sayHello(); // Hi! My name is John
person2.sayHello(); // Hi! My name is Jane
// Removing a property from an object's prototype
delete person2.gender;
console.log(person2.gender); // undefined

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
const newObject = Object.create(somePrototype);