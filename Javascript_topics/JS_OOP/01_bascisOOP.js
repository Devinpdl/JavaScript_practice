const user={
    username: 'Samundra',
    loginCount: 8,
    isAdmin: true,
    SignedIn: true,
    //This all is Properties. Just like .length in Array's properties.

    //Now, Let's see about methods.
    getUserDetails: function(){
        // console.log(`Username : ${this.username}`);
        //If you don't give .this then it'll give error. Let's check it.
        // console.log(`Login Count : ${loginCount}`) //.. This typically gives error as;
        // ReferenceError: loginCount is not defined
        //Now, if we give the current context .this then it'll access the properties of whole parent class.
        // return `Username : ${this.username}, Login Count : ${this.loginCount}`;
        //++++ LET Understand What's .this will do here inside function+++++
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
//Here, getUserDetails() is method so we need to run/execute it by using parenthesis ().
// Here,  we can't give references only as just like, getUserDetails.
// We have to use getUserDetails(). Because JavaScript is case-sensitive language and it treats getUserDetails and getUserDetails as two

//Here, If we try to use current context then see, it will give you empty object literals {}.
//Here, we can't get values from global context using .this which is defined outside function.
//So, let's understand what happens when we call a method with .this.

// console.log(this);
// But, In case of Browser's console...
// It returns Window Object which is from browser functionality. But inside node.js it returns empty object literals.

//Property vs Method - The property holds the value while method performs an action on that value.
/*
let num=5;
num = num +10;   //Here we are performing an operation on a variable called "num". So it's not a property but
//a method because it does something with the data stored in the variable.
*/

// let myArr=[1,2,3];
// let myArr2=[1,2,3,4,8];
/*
Here, Inside of this both array there's a prototype called .map.
If you try to do myArr.map or myArr2.map then it will show error because these arrays doesn't have .map property
because of the conflict...
That's why current context main role comes here..
So, We use .this to give the references of current context.
Because if we don't do that then JavaScript will search for map() from window object and it won't find any.
Then It will throw an error saying map() is not found.

*/

// +++++++ LETS TALK ABOUT CONSTRUCTOR FUNCTION ++++++++++
// function User(name, age){
//     /*
//     1) this - represents the instance of the user.
//     Whenever we create new objects from constructor functions then this keyword represent that newly created object.
//     2) name - represents the argument passed during the creation of the object.
//     3) age - represents the argument passed during the creation of the object.
//     */
//    this.name = name;
//    this.age = age;
//    /*
//    Now, Whenever someone creates a new Object off of our User function then it will automatically execute
//    whatever code written inside the constructor function.
//    */
// }

// // const promiseOne = new Promise();
// const date = new Date();
// //Here, new keyword is the constructor function.
// //Here when we calling Date we're wanting the new instances. So, It doesn't have the functionality of extracting
// //extracting previous contexts.

// // +++++ NOW, LETS SEE THE FUNCTIONALITY OF CONSTRUCTOR FUNCTION ++++

// function User(username, loginCount, isAdmin){
//     //We're wanting this three values to be saved in one variable name
//     //But JS doesn't allow us to have same key multiple times so we can make an object.
//     this.userInfo={};
//     this.userInfo.username = username;
//     //Here, Left side username is variable 
//     //Right Side username is Key/arguments that we are passing which is referenced by username,loginCount parameters above.
//     //So, this is an object..Here, we're passing values of a variable(username) in an empty object by doing
//     // this.username, this.age, this.city, and so on.. 
//     // So, this. this, this. that is nothing but we're putting values of variable inside of empty object'{}'.

//     this.userInfo.loginCount = loginCount;
//     this.isUserAdmin = isAdmin;  //This is how you would save it directly into the parenthesis/object.
//     this.getLoginDetails = function(){
//         //Also here, this.getLoginDetails means we're storing getLoginDetails method inside 'this' object
//         // i.e; empty object of .this '{}'
//         return `Username: ${this.userInfo.username}, Login Count: ${this.userInfo.loginCount}`;
//         }
// }
// console.log(new User("JohnDoe", 5, false).getLoginDetails());


// function User(username, loginCount, isAdmin){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isAdmin = isAdmin;

//     return this;
// }
// const user1 = User('Devin Samundra', 4, true);
// const user2 = User('Error', 9, false)
// console.log(user1);
// console.log(`${user1.username}, ${user1.loginCount}, ${user1.isAdmin}`);

//Here, The values does overwrite those who runs at last.
//Here, we are calling user1 and we didn't even called the user2. Though user1 values does get overwrites here.
// This is the problem because of not specifying it's own current context by using new keyword here.
// Here if 10 programmers are creating their own functions working for same project
// then all will use the same data which is not good programming practice.
// So, always remember to use new keyword when defining a Constructor Function.

//Lets see example;


// function User(username, loginCount, isAdmin){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isAdmin = isAdmin;
//     this.greeting = function(){
//         console.log(`Hello, I am ${this.username}!`);
//     }

//     // return this;
//     // No need to return this. It's implictly defined.
// }
// const user1 = new User('Devin Samundra', 4, true);
// const user2 = new User('Error', 9, false)
// //If there's availability of constructor then can we see properties?
// //Let's see;
// console.log(user1.constructor);
// //So, Here Output is [Function: User]
// //It shows that our User is a function and belongs to User Constructor.
// //So, Constructor property is nothing but it's the references of itself(Here in our case it's about User).
// // console.log(user2);
// // console.log(`${user1.username}, ${user1.loginCount}, ${user1.isAdmin}`);

// // Let's UNDERSTAND ABOUT INSTANCES OF ++++++
// //Instances of an object are created from the constructor function.
// //They have access to the methods as well as properties of the constructor function.
// //But they don't have direct access to other instances variables.
// //Now let's call greeting method on both users.
// user1.greeting();
// user2.greeting();


// Define a constructor function User to create user objects
function User(username, loginCount, isAdmin) {
    // Properties to store user data
    this.username = username;
    this.loginCount = loginCount;
    this.isAdmin = isAdmin;

    // Method to greet the user
    this.greeting = function() {
        console.log(`Hello, I am ${this.username}!`);
    }
}

// Create the first user, user1
const user1 = new User('Devin Samundra', 4, true);

// Create the second user, user2
const user2 = new User('Error', 9, false);

// Now, let's check if user1 and user2 are instances of the User constructor using instanceof
// instanceof returns true if the object is an instance of the specified constructor
console.log(user1 instanceof User); // Output: true
console.log(user2 instanceof User); // Output: true

// This is useful to check the type of an object, especially when dealing with inheritance
// For example, if there was another constructor like AdminUser that extends User
// You can check if an object is an instance of AdminUser or User
// console.log(user1 instanceof AdminUser); // Output: false (assuming AdminUser is another constructor)
