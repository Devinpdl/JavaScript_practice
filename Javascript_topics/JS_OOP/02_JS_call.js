//# JavaScript Call Method

//## 1. Introduction to the Call Method

//**Definition:** The `call` method in JavaScript is a powerful function method that allows you to invoke a function 
//with a specified `this` value and pass arguments individually.

//**Key Points:**
//- It provides a way to set the value of `this` explicitly during function invocation.
//- Arguments are passed individually, allowing for flexibility in function calls.

//## 2. Basic Usage of Call Method
//JS code:
// Define a simple function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Call the function using the call method
greet.call(null, 'John');
// Output: Hello, John!

// Explanation:

/*The call method is used to invoke the greet function with the specified this value (null in this case) and the 
argument 'John'.
*/

// ## 3. Using Call with Parameters
function introduce(title, age) {
    console.log(`I am ${title} and I am ${age} years old.`);
}

introduce.call(null, 'Mr.Devin', 30);
// Output: I am Mr.Devin and I am 30 years old.
/*
Explanation:
The introduce function takes two parameters, and the call method is used to pass values for these parameters during 
the function call.
*/

// ## 4. Changing the "this" Value
// In some cases, you may want to change the value of `this` within a function. This can be done by passing an object as the first
// argument to the call method. The value of `this` will be set to the object passed as the first argument.
const person = {
    name: 'Alice',
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const anotherPerson = {
    name: 'Bob',
  };
  
  // Use call to invoke greet with the "this" value set to anotherPerson
  person.greet.call(anotherPerson);
  // Output: Hello, Bob!

  // Explanation:
  //Demonstrates how call is used to set the value of this to a different object (anotherPerson).
  /*
  In JavaScript, the this keyword is used in the context of an object. 
  It refers to the current object that the script is being executed on.
  When we use the call() method, it changes the value of this inside a function so that it points to whatever object 
  we pass as its first argument.
  In this example, the greet function is originally a method of the 'person' object.
  However, when we use call and pass 'anotherPerson' as the first argument,
  the value of this inside greet is set to 'anotherPerson', resulting in the output "Hello, Bob!"
  */

  // ## 5. Passing Arguments Dynamically
  function displayDetails(role, salary) {
    console.log(`Role: ${role}, Salary: ${salary}`);
  }
  
  const employee = {
    role: 'Developer',
    salary: 50000,
  };
  
  // Dynamically pass object properties as arguments using call
  displayDetails.call(null, employee.role, employee.salary);
  // Output: Role: Developer, Salary: 50000

  // Explanation:
  //Shows how the call method can dynamically pass object properties as arguments to a function.
  //The call method allows us to dynamically pass arguments to a function by passing them as an array.
  //In this case, instead of explicitly listing each property like so:
  //displayDetails('Developer', 50000),
  //we can achieve the same result using apply:
  //apply takes two parameters - the this value and an array of arguments.
  //So if we want to pass multiple values, we can do it like this:
  //displayDetails.apply(null, [employee.role, employee.salary]);

  // ## 6. Using bind for Methods
  const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2019,
    details() {
        return `${this.brand} ${this.model} (${this.year})`;
        },
        };
        // Bind the details method to the car object
        const showCarDetails = car.details.bind(car);
        // Call the bound function
        console.log(showCarDetails()); // Tesla Model S (2019)
        // Explanation:
        // The bind method creates a new version of the function with the specified this value.
        // So here, we are binding the details method of the car object to the car object itself.
        // This means that whenever we call showCarDetails(), it will always refer to the car object
        // and therefore have access to all its properties.

  // ## 7. Using "this" Value and Additional Arguments
  function printDetails(company) {
    console.log(`Name: ${this.name}, Role: ${this.role}, Company: ${company}`);
  }
  
  const personDetails = {
    name: 'Charlie',
    role: 'Designer',
  };
  
  // Using call to set "this" and pass an additional argument
  printDetails.call(personDetails, 'ABC Corp');
  // Output: Name: Charlie, Role: Designer, Company: ABC Corp

  // Using apply to set both "this" and additional arguments
  printDetails.apply(personDetails, ['XYZ Inc']);
  // Output: Name: Charlie, Role: Designer, Company: XYZ Inc</s>

  //Explanation:

//Demonstrates using call to set the value of this and pass an additional argument.

// ## 8. Summary
/*
The call method is a versatile tool in JavaScript, providing a way to invoke functions with specific 
this values and flexible argument passing. Understanding its usage is crucial for controlling the context of function 
execution and achieving code flexibility.
*/

