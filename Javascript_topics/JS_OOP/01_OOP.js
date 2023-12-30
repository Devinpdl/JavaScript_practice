// Let's understand the basics of OOP in JavaScript

// 1. Creating a Class and Instantiating Objects

// Class definition
class Animal {
    // Constructor function to initialize instances
    constructor(name, species) {
      // Properties to store data about the animal
      this.name = name;
      this.species = species;
    }
  
    // Method to make the animal sound
    makeSound() {
      return "Generic animal sound";
    }
  }
  
  // Creating instances (objects) of the Animal class
  const lion = new Animal("Leo", "Lion");
  const parrot = new Animal("Polly", "Parrot");
  
  // Accessing properties and methods
  console.log(lion.name); // Output: Leo
  console.log(parrot.species); // Output: Parrot
  console.log(parrot.makeSound()); // Output: Generic animal sound
  
  // 2. Inheritance
  
  // Creating a subclass (extends Animal class)
  class Cat extends Animal {
    /*
    Here, Inheritance is a mechanism where a new class inherits properties and behaviors from an existing class.
          -The extends keyword is used for inheritance.
    */
    // Additional property specific to Cat
    constructor(name, breed) {
      // Call the constructor of the parent class (Animal)
      super(name, "Cat");
      /*
      Here,The second argument, the string "Cat", is passed as the species parameter to the Animal constructor, 
      initializing the species property of the animal.
      Essentially, it initializes the name and species properties of the Animal class, which the Cat class inherits.
      If we don’t call super here, then the species would just get set to undefined.
      -The super keyword is used to call methods of a parent class within a child class.
      -In the constructor of the child class, super is used to invoke the constructor of the parent class.
      */
      this.breed = breed;
      /*
      Here, After calling super, the Cat class can add additional properties or methods specific to cats. 
      In this case, it adds a breed property.
      */
    }
  
    // Override the makeSound method for Cat
    makeSound() {
      return "Meow";
      /*
      Here makeSound() is working as Polymorphism.
      -Polymorphism allows objects of different classes to be treated as objects of a common base class.
      -It enables methods to be used interchangeably for different objects.
      */
    }
  }
  
  // Creating an instance of Cat
  const fluffy = new Cat("Fluffy", "Persian");
  
  // Accessing properties and methods of Cat
  console.log(fluffy.name); // Output: Fluffy
  console.log(fluffy.breed); // Output: Persian
  console.log(fluffy.makeSound()); // Output: Meow
  
  // 3. Encapsulation
  
  // Creating a class with private data
  class BankAccount {
    // Private property
    #balance;
  
    // Constructor to initialize the balance
    constructor(initialBalance) {
      // Validate input or set default values
      this.#balance = initialBalance || 0;
    }
  
    // Method to get the balance (getter)
    getBalance() {
      return this.#balance;
    }
  
    // Method to deposit money
    deposit(amount) {
      // Validate input
      if (amount > 0) {
        this.#balance += amount;
        return "Deposit successful";
      } else {
        return "Invalid amount for deposit";
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      // Validate input and check if sufficient balance
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        return "Withdrawal successful";
      } else {
        return "Invalid amount or insufficient balance";
      }
    }
  }
  
  // Creating an instance of BankAccount
  const account = new BankAccount(1000);
  
  // Accessing and modifying private data
  console.log(account.getBalance()); // Output: 1000
  console.log(account.deposit(500)); // Output: Deposit successful
  console.log(account.getBalance()); // Output: 1500
  console.log(account.withdraw(200)); // Output: Withdrawal successful
  console.log(`Now, Your Balance is: ${account.getBalance()}`); // Output: 1300
  