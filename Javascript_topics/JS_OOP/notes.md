#JavaScript and Objects

##Objects
//Objects are collections of properties, each property is a key-value pair.
//toLowerCase, toUpperCase, Promises all are also Objects in Js.

##OOP
Object Oriented Programming - A programming paradigm that uses objects to structure the program.
A class is like a blueprint for creating objects (a mold). An object is an instance of a class.

#Why Use OOP?

1) Reusability: If you have two similar items, it's more efficient to create one item and reuse it instead of creating separate items. This promotes a modular and DRY (Don't Repeat Yourself) approach, reducing redundancy and making code maintenance easier. Classes provide a template for creating objects with shared functionality, allowing for efficient reuse of code.
Eg;
// Reusable Class
class Logger {
  log(message) {
    // ... log the message
  }
}

// Create instances of Logger
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Log from logger1");
logger2.log("Log from logger2");


##Classes vs Constructors
In JavaScript we don't have classes as such but we can use functions(constructors) to create objects.

##Parts of OOP
1. Properties: These hold values related to an object. They define characteristics about the object.
Eg: name, age etc.
2. Methods or Functions: These perform actions on the object. They represent behaviors associated with the object.
3. Obeject Literals: {} . Object Literals are nothing but that which is wrapped up into curly braces {}
4. Constructor function
5. Prototypes
6. Classes
7. Instances or new keyword, this

## 4-PILLARS
Encapsulation - Hiding data within an object so it cannot be accessed directly by other parts of the code.
Abstraction - Showing only necessary features of an object while hiding its implementation details.
Inheritance - Creating a new class based on existing one, reusing the code written in parent class. This allows us to reuse code across different.
Polymorphism - The ability of different objects to be treated as objects of a common superclass. In other words, polymorphism allows us to treat objects of different types. Poly mean muliple And, Morphism means sworoop.




