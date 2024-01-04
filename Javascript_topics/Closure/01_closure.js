    // function outer(){
    //     const username = 'Devin Paudel'
    // }
    // console.log(username);
    //Does this type of access works??
    //Does Not works right?
    // This is Due to Function scope.. Any variable that is invoke from outside of the function it is not
    //accessible.. This means function scope.

    

    //Now, Lets see Closure Function.
    //Closures are functions that have access to the parent function’s variables, even after
    //the parent function has finished execution. In other words, a closure gives you access to an
    //outer function’s scope from an inner function.

    // function outer() {
    //     const outerVar = "I'm from outer!";
    
    //     function inner() {
    //         console.log('Accessing outerVar from the outer function:', outerVar); // Accessing outerVar from the outer function
    //     }
    
    //     inner();
    // }
    
    // outer();

    // function outer(){
    //     let username = "Devin Paudel"
    //     // console.log("OUTER Function accessing inner child function's variable", mysecret);
    //     // Here, Outer function can't access inner function's variable..
    //     // It's same just like grand father can't asks for chocolates with children but child can asks for
    //     // chocolates with Grandfather...
    //     function inner(){
    //         let mysecret = "my123"
    //         console.log("inner child Function is accessing outer parent function's variable:", username);
    //         // console.log("Function inner() can't access its child innerTwo()'s value: ", mynum);
    //         // Here, it gives error.
    //         /*
    //         There's no sharing of variable between child-to-child..
    //         Bhai-Bhai le aafno sampati sharing garna namaanye jastai ho..So, no sharing betn Bhai-Bhai
    //         */
    //     function innerTwo(){
    //         console.log("Now, innerTwo child Function is accessing outer parent function's variable:", username);
    //         console.log('InnerTwo is also accessing above parent inner() function variable:',mysecret);
    //         let mynum ='MyNumber98099290011'
    //     }
    //     innerTwo();
    // }
    //     inner();
        
        

    // }
    // outer();
    // // console.log("TOO OUTER", username);
    // TOO OUTER can't access due to function scope.. we can call function but
    // we can't acess variable anything that's wanting to access function's variable outside of its function...
    // Simply, it means, we cannot access the value outside of that function.


    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const myFunc = makeFunc();
    // myFunc();

    // //Now, Lets see Lexical scoping
    // //Lexical Scoping or Dynamic Scope: In JavaScript, lexical scoping
    // //is used for determining the visibility and lifetime of variables in a program.
    // //In other words, lexical scoping refers to how functions store information about their local environment
    // //and use that information to determine what variables are accessible within them.
    // //So, Let's try again with Lexical Scoping
    // function outerFunc() {
    //     let name = 'Devin';
    //     return function innerFunc() {
    //         console.log(`Hello ${name}`);
    //         };
    //         }
    //         let myFunction = outerFunc();
    //         myFunction();
    //         // Output : Hello Devin
    //         // Now, If we want to change the value of `name` then how can we
    //         // do that using our current approach ?
    //         // Solution ----->
    //         // We need to call the outer function first and assign its returned value to some new variable.
    //         // Then, we will be able to access the `name` property of that newly created object
    //         let newOuterFunc=outerFunc();
    //         newOuterFunc.name='John Doe';
    //         myFunction=newOuterFunc;
    //         myFunction();
    //         // Output : Hello John Doe
    //         // Questions Answered -->
    //         // 1) How can I access a variable which is inside another function?
    //         // Answer -> You cannot directly access a variable if it is inside another function. But you can
    //         // make it accessible by returning that function from inside the parent function and assigning it
    //         // to a new variable.
    //         // 2) Can I modify the value of a variable which is inside another function?
    //         // Answer -> Yes, but only through that specific way shown above. Otherwise, you won'
    //         // be able to modify it because you don't have direct access to it.

    // ++++++++++++++++ CLOSURE FUNCTION ++++++++++++++++++++++++++++
   // What is closure?
/*
Closures are created when a function is defined inside another function, and they retain access to the variables 
of the outer function even after the outer function has finished execution.
*/

// 1. Creating a Closure
/*
A closure is formed when an inner function is returned from an outer function.
This means that any data stored (variables) by the inner function still exist once the outer
function finishes executing. So, if the outer function has a scope chain, so does
the inner function. The inner function "remembers" its own scope along with the parent
functions scope. It maintains this until the script ends.
*/

function outer() {
    const outerVar = "I'm from outer!";

    function inner() {
        console.log(outerVar); // Accessing outerVar from the closure
    }

    return inner;
    /*
    Here, Once you return the inner function, then once you execute outer() function by calling outer();
    the inner function gets executed, and it can access all variables in the outer function, including
    the outerVar. But as soon as the outer() function completes its execution, the outer
    function’s execution context is removed from memory. However, since the inner function has
    been returned and assigned to closureFn, it still retains access to the outerVar, and calling
    closureFn() logs the value of outerVar.
    */
}

const closureFn = outer();
closureFn(); // Still has access to outerVar

// 2. Use Cases : Closures are often used to create private variables or to encapsulate functionality.
// Private Members Example:
// class Car {
//     constructor(make, model, year) {
//         let speed = 0;
//         let color = "Blue";
//         this.getColor = () => color; // Oneline so no use of {} or any return.
//         this.setColor = c => color = c;
//         this.accelerate = () => speed++;
//         this.brake = () => speed--;
//         this.getSpeed = () => `The car is traveling at ${speed} miles per hour.`;
//         this.make = make;
//     }
// }
// let myCar = new Car("Ford", "Mustang", 200 + "2019");
// console.log(myCar.getColor()); // Output: Blue
// myCar.setColor("Red");
// console.log(myCar.getColor()); // Output: Red
// console.log(myCar.make);
// console.log(myCar.getSpeed()); // The car is traveling at 0 miles
// myCar.accelerate();
// console.log(myCar.getSpeed()); // The car is traveling at 1 miles
// myCar.accelerate();
// console.log(myCar.getSpeed()); // The car is traveling at 2 miles

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // Outputs 1
increment(); // Outputs 2

//3. Memory Management
//Closures can lead to memory issues if not managed properly. Be mindful of the scope chain to avoid unintentional 
//retention of unnecessary variables.
function createBigObject() {
    const bigObject = new Array(1000000).fill({});
    return function () {
        console.log(bigObject.length);
    };
}

const closureFn1 = createBigObject();
closureFn1(); // The bigObject is still referenced by the closure

// +++++++++++++ PRACTICAL IMPLEMENTATION OF CLOSURE IN REAL LIFE+++++++++++++++
//See 02_clouser.html for this

