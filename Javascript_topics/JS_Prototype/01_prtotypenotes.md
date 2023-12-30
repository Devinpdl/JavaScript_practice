# JavaScript Prototypes

## 1. Introduction to Prototypes
- **Definition:** A prototype is an object from which other objects inherit properties. It acts as a template that allows objects to share common properties and methods.
- **Base Object:** Every object in JavaScript, except the base object, has a prototype.

## 2. \_\_proto\_\_ Property
- **Accessing Prototype:** The `__proto__` property is used to access an object's prototype.
- **Example:**
  ```javascript
  # JavaScript Prototypes

## 1. Introduction to Prototypes

**Definition:** A prototype is an object from which other objects inherit properties. It acts as a template that allows objects to share common properties and methods.

**Base Object:** Every object in JavaScript, except the base object, has a prototype.

## 2. __proto__ Property

**Accessing Prototype:** The `__proto__` property is used to access an object's prototype.

**Example:**
```javascript
// Define a constructor function
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Create an instance of the Animal constructor
const lion = new Animal("Leo", "Lion");

// Access the prototype using proto
const animalPrototype = lion.proto;

// Print information about the prototype
console.log("Animal Prototype:", animalPrototype);

// Define a method in the prototype
animalPrototype.makeSound = function () {
  console.log("Generic animal sound");
};

// Call the method using the instance
lion.makeSound(); // Output: Generic animal sound

// Create another instance of the Animal constructor
const parrot = new Animal("Polly", "Parrot");

// Access the prototype using proto
const parrotPrototype = parrot.proto;

// Print information about the prototype
console.log("Parrot Prototype:", parrotPrototype);

// Try calling the method on the parrot instance
// This works because it inherits from the prototype
parrot.makeSound(); // Output: Generic animal sound

  ```

## 3. Constructor Functions and Prototypes
Setting Prototypes: When you create an object using a constructor function, its prototype is set to the constructor function's prototype property.
**Example:**
```javascript
  // 1. Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 2. Create an instance of the constructor function
const person1 = new Person("John", 25);

// 3. Access and modify the prototype property of the constructor function
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

// 4. Call the method from the prototype using the instance
person1.greet(); // Output: Hello, my name is John

// 5. Create another constructor function that inherits from Person
function Student(name, age, grade) {
    // Call the constructor of the parent (superclass)
    Person.call(this, name, age);
    this.grade = grade;
}

// 6. Set the prototype of Student to an instance of Person
Student.prototype = Object.create(Person.prototype);

// 7. Create an instance of the Student constructor
const student1 = new Student('Alice', 20, 'A');

// 8. Call the method from the prototype using the student instance
student1.greet(); // Output: Hello, my name is Alice

  ```

## 4. Adding Methods to Prototypes
Prototype Methods: Methods added to a constructor function's prototype are shared among all instances created by that constructor.
- **Adding method example:**
```javascript
  // 1. Define a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// 2. Add a method to the constructor function's prototype
Car.prototype.startEngine = function () {
    console.log(`${this.make} ${this.model}'s engine is started.`);
};

// 3. Create instances using the constructor function
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Accord");

// 4. Call the shared method from the prototype on each instance
car1.startEngine(); // Output: Toyota Camry's engine is started.
car2.startEngine(); // Output: Honda Accord's engine is started.

  ```

## 5. Prototype Inheritance
Creating Subclasses: Objects can inherit properties and methods from a prototype, allowing for the creation of subclasses.
- When creating a new object using a constructor function, if that function does not have its own `prototype`, JavaScript will look up the inheritance chain until it's not found.
**Example:**
```javascript
  // 1. Define a parent constructor function
function Animal(name) {
    this.name = name;
}

// 2. Add a method to the parent constructor function's prototype
Animal.prototype.makeSound = function () {
    console.log("Generic animal sound");
};

// 3. Define a subclass constructor function
function Dog(name, breed) {
    // Call the parent constructor to set the 'name' property
    Animal.call(this, name);
    this.breed = breed;
}

// 4. Set the prototype of the subclass to an instance of the parent
Dog.prototype = Object.create(Animal.prototype);

// 5. Add a method to the subclass constructor function's prototype
Dog.prototype.bark = function () {
    console.log("Woof! Woof!");
};

// 6. Create instances using both the parent and subclass constructors
const genericAnimal = new Animal("Fluffy");
const dogInstance = new Dog("Buddy", "Golden Retriever");

// 7. Call methods on instances
genericAnimal.makeSound(); // Output: Generic animal sound
dogInstance.makeSound();   // Output: Generic animal sound
dogInstance.bark();        // Output: Woof! Woof!

  ```

## 6. Object.create() Method
-Creating Objects: The Object.create() method is used to create a new object with the specified prototype object.
-The `Object.create()` method creates a new object with the specified prototype object and properties. If no prototype is provided, the newly created object will inherit from the base Object prototype.
**Example:**
```javascript
  // 1. Create a prototype object
const animalPrototype = {
    // A method in the prototype
    makeSound: function () {
        console.log("Generic animal sound");
    }
};

// 2. Create a new object with the specified prototype using Object.create()
const genericAnimal = Object.create(animalPrototype);

// 3. Define a specific prototype for a 'Cat' with additional properties
const catPrototype = Object.create(animalPrototype, {
    // Additional property for the 'Cat' prototype
    breed: {
        value: "Unknown",
        writable: true,
        enumerable: true
    },
    // Overriding the makeSound method for the 'Cat' prototype
    makeSound: {
        value: function () {
            console.log("Meow");
        },
        writable: true,
        enumerable: true
    }
});

// 4. Create a new object with the 'Cat' prototype
const fluffy = Object.create(catPrototype);
fluffy.breed = "Persian";

// 5. Access and call methods from the 'Cat' prototype
console.log(fluffy.breed);      // Output: Persian
fluffy.makeSound();              // Output: Meow

// Explanation:

// 1. We create a generic 'animalPrototype' with a method 'makeSound'.

// 2. We create a 'genericAnimal' object inheriting from 'animalPrototype'.

// 3. We create a specific 'catPrototype' inheriting from 'animalPrototype'.
//    This 'catPrototype' includes an additional property 'breed' and overrides the 'makeSound' method.

// 4. We create a new object 'fluffy' inheriting from 'catPrototype'.
//    We set the 'breed' property for 'fluffy' to 'Persian'.

// 5. We access and output the 'breed' property and call the overridden 'makeSound' method for 'fluffy'.
//    The output showcases the specific behavior of the 'Cat' prototype.

  ```
## 7. Checking for Instanceof
Instanceof Operator: It is used to check whether an object is an instance of a particular constructor.
**Example:**
```javascript
 // 1. Define a base constructor function for the 'Animal' class
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// 2. Create a method for the 'Animal' prototype
Animal.prototype.makeSound = function () {
    console.log("Generic animal sound");
};

// 3. Define a subclass 'Cat' that extends 'Animal'
function Cat(name, breed) {
    // Call the superclass constructor (Animal) to initialize common properties
    Animal.call(this, name, "Cat");

    // Additional property specific to the 'Cat' class
    this.breed = breed;
}

// 4. Set up the prototype chain: 'Cat' inherits from 'Animal'
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // Fix the constructor property

// 5. Create an instance of the 'Cat' class
const fluffy = new Cat("Fluffy", "Persian");

// 6. Check if the object is an instance of the 'Animal' and 'Cat' classes
const isAnimalInstance = fluffy instanceof Animal;
const isCatInstance = fluffy instanceof Cat;

// Explanation:

// 1. We define a base constructor function 'Animal' and add a method to its prototype.

// 3. We define a subclass 'Cat' that extends 'Animal'. It calls the superclass constructor and adds a new property.

// 4. We set up the prototype chain, ensuring that 'Cat' inherits from 'Animal'.

// 5. We create an instance 'fluffy' of the 'Cat' class.

// 6. We use the 'instanceof' operator to check if 'fluffy' is an instance of both 'Animal' and 'Cat' classes.

// Output:
// - isAnimalInstance: true (because 'fluffy' is an instance of 'Animal' due to the prototype chain)
// - isCatInstance: true (because 'fluffy' is also an instance of 'Cat')

console.log(isAnimalInstance);
console.log(isCatInstance);

  ```
## 8. Summary
The __proto__ property holds a reference to the object’s prototype.
A constructor function's prototype property is used as the prototype for objects created by that constructor.
Understanding prototypes is crucial in JavaScript as it forms the basis for object-oriented programming and helps in creating efficient and maintainable code. It enables code reuse through inheritance and fosters a clear structure in your applications.
8. Summary

Understanding prototypes in JavaScript is pivotal as it forms the foundation for effective object-oriented programming (OOP) and plays a crucial role in creating efficient and maintainable code. Here's a comprehensive summary:

The __proto__ Property:

The __proto__ property is an internal reference in each object that points to its prototype.
It establishes a link in the prototype chain, connecting an object to its prototype.
-Constructor Function's Prototype:

A constructor function's prototype property is used as the prototype for objects created by that constructor.
When you create an object using a constructor function, its prototype is set to the constructor function's prototype property.
Crucial Role in JavaScript:

-Understanding prototypes is vital for effective OOP in JavaScript.
It enables code reuse through inheritance, allowing objects to inherit properties and methods from their prototypes.
This concept fosters a clear and organized structure in your applications.
Code Reusability and Maintainability:

-Prototypes facilitate code reusability by allowing objects to inherit features from their prototypes.
It promotes maintainability by providing a structured way to organize and extend the functionality of objects.
Basis for Object-Oriented Programming:

-Prototypes are at the core of JavaScript's object-oriented programming paradigm.
They allow for the creation of classes, instances, and the establishment of relationships between them.
Efficient and Clear Structure:

-Prototypes contribute to creating efficient code by avoiding redundancy through inheritance.
They enable the creation of a clear and organized structure in your applications, making the codebase more comprehensible.
In essence, a profound understanding of prototypes empowers developers to leverage the full potential of OOP in JavaScript, leading to more maintainable, reusable, and well-structured code. This knowledge is fundamental for any JavaScript developer aiming to build robust and scalable applications.