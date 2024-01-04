// ## Setting Username in a Constructor Function

// Define a function SetUsername that simulates complex database calls and sets the username property.
function SetUsername(username) {
   // Simulate complex DB calls
   this.username = username;
   console.log("We called it");
}

// Define a createUser function that creates a new user and sets properties using SetUsername.
function createUser(username, email, password) {
   // Use SetUsername with call to set the username property for the current user.
   // Note: The first argument of call should be 'this', representing the current object.
   SetUsername.call(this, username) //correctly sets the username property on the current user object.
   // Here, .call will hold the references of SetUsername of the parent function.
   // If we write as SetUsername.call(username), then the above this.username = username; will be blown up,
   // and it will be removed from the Global execution context once it gets called.
   // So, to hold the references on its own, the function createUser will hold the references by using this
   // when we call the superclass.

   // SetUsername(username) is the same as calling SetUsername.call(null, username),
   // which doesn't effectively set the username property on the user object.

   // Set other properties for the user.
   // this.username = username;  // This correctly sets the username property on the current user object.
   // Here, actually this doesn't work for the email and password properties.
   this.email = email;
   this.password = password;
}

// Create an instance of createUser named 'mycode' with specific details.
const mycode = new createUser("Devin", "Hero@gmail.com", "123");

// Output the created 'mycode' object.
console.log(mycode);

// Explanation:
/*
1. **SetUsername Function:**
  - The SetUsername function is designed to simulate complex database calls. It takes a username as a parameter 
  and sets the username property on the current object (referenced by 'this').
  - In this example, 'SetUsername' is used to set the username property for a user.

2. **createUser Function:**
  - The createUser function is a constructor function for creating user objects. It takes parameters for username, 
  email, and password.
  - Inside createUser, the SetUsername function is called using the call method. This sets the username property on 
  the current user object.
  - Other properties like email and password are set directly on the user object using the 'this' keyword.

3. **Creating an Instance:**
  - An instance of createUser named 'mycode' is created with specific details ('Devin', 'Hero@gmail.com', '123').
  - The call to SetUsername within createUser ensures that 'mycode' has a username property.

4. **Output:**
  - The final 'mycode' object is outputted, showing the properties set for the user, including the username 
  obtained from the SetUsername function.
*/
