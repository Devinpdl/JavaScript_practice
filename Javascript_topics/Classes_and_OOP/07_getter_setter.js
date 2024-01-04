// class userFunction{
//     constructor(user, email, password){
//         this.user = user;
//         this.email= email;
//         this.password = password;
//     }
//     get password(){
//         // return this.password.toUpperCase();
//         //This will give the output of;
//         //TypeError: Cannot set property password of #<userFunction> which has only a getter
//         //It means we've to put setter too.
//         // return this._password.toUpperCase();
//         return `${this._password}Devin`;
//         //This will generate the Output as;
//         //"MypassWord123Devin"
//     }
//     set password(value){
//         // this.password= value;
//         //This will give the output of;
//         // RangeError: Maximum call stack size exceeded.
//         //This means, we said to set the value inside password. But,
//         // But, while setting value, constructor is being called repeatedly thus giving error of maxm call size exceeded
//         //when setting the value in password, it again calls the same function
//         //So, there is an infinite loop here. 
//         //Here, actually set is also setting its value, above constructor(user, email, password) is also setting
//         //its value.. And then there's a race of seeting value..//It will be case of race condition.
//         //Both try to run at the same time, but will not be able to run due to race condition.
//         this._password= value;
//         //This will solve the issue of setter.
//         //Again above getter will generate issues.
//         // So, We can use one more variable _password for setting the value and using that in getter.
//         // _password is setting the value of MypassWord123 arguments.
//         // But, When we do want to say the user that, you can't work with this value and
//         //You can work with another value.. Then, it can be achieved by;
//     }
//     get email(){
//         return this._email.toUpperCase();
//         //In getter, there comes always a value.
//         //So, you've to return that value always.
//     }
//     set email(value){
//         this._email= value;
//     }
 
// }
  
// let addUser = new userFunction("Devin Paudel", "Devin@example.com","MypassWord123");
// console.log(addUser.password);
// console.log(addUser.email);

// //When we want fine green control like when user want to access password from the properties,
// //And, we don't want to give access of those crediantals..Then,
// //we can use getter and setter methods in JavaScript.

// //Now, Let's see How we use get_set_through_properties_old_way (Mainly in old ages/old generations)
// It's Mainly using function in getter and setter.

// function userFunction(user,email,password){
//     this._user= user;
//     this._email=email;
//     this._password=password;

//     // Object.defineProperty(this,'email',{
//         //For  Object.defineProperty , For 1st parameter we've to give the context, and then give the property which you want to
//         //Override and the last third parameter is object that you want to work with...
//     //     get:function() {return this._email},
//     //     set:function(value) {if (value!=='') this._email = value}
//     //     });
//     //     this.getUserInfo=function () { return 'User name: ' + this._user + ', email: '+ this._
//     //     ._email + ', password:' + this._password};
//     //     }
//     //     let user1 = new userFunction('John','john@abv.bg','123456');
//     //     console.log(user1.getUserInfo()); // User name: John, email: john@abv.bg, password:
//     //     123456

//     Object.defineProperty(this,'email',{
//         //  
//         get: function() {
//             return this._email.toUpperCase();
//         },
//         set: function(value){
//             this._email = value;

//         }

//     })
//     Object.defineProperty(this,'user',{
//         //  
//         get: function() {
//             return this._user.toUpperCase();
//         },
//         set: function(value){
//             this._user = value;

//         }

//     })

// }
// const testing = new userFunction("Devin", "MyGmail@google.com",'Hero');
// console.log(testing._email);
// console.log(testing._user);
//This all getter setter is function based syntax...Similarly, we can also Do Object based Syntax..
//Let's see example of it;
/*Object Based Syntax*/

const userObject = {
    _user: "Devin",
    _pass: "123456",
    _email: "mygmail@yahoo.com",
    //Here, Underscore _ Means //Private member variable , which means it doesn't comes under the 
    //usage of normal users.


    // Getter for user
    get user() {
        //Here, user is just the getter method.. And, Once we use getter or setter methods..
        // the usage of underscore_ no longer have any meaning
        // Now, the _underscore will see if there's a property like email, user, pass, etc..
        // If then, If there's a new object creation from the above class like; 'const drinks = Object.create(userObject);
        /*
        Here, drinks has its own property which itself comes when we just write .(dot).
        Drinks and User both are properties but they don't have their own properties.. They come
        from prototype chaining. So, Whenever we call drinks, It goes to Prototype
        Chaining and Checks whether it has its own Property or not? If yes then returns that,
        else goes to next level i.e., prototype object and checks again.

        This both getter and setter doesn't lets it to remain as method like; user(), pass(), user(newValue).
        Instead of that, It gives us a simple way to access these values by using dot notation. Like we did below;
        'drinks.pass'

        */

        return `User Name is: ${this._user}`;
    },

    // Setter for user
    set user(newValue) {
        if (typeof newValue !== "string") {
            throw new TypeError("User name must be a string");
        } else if (newValue.length < 3) {
            throw new Error("User name should have at least 3 characters");
        } else {
            this._user = newValue;
        }
    },

    // Getter for password
    get pass() {
        // Improved password masking
        return `Password is: ${this._pass.slice(0, 7)}******${this._pass.slice(-3)}`;
    },

    // Setter for password
    set pass(newPass) {
        // Improved password validation
        const check = /[A-Z]/.test(newPass) && /[a-z]/.test(newPass) && /\d/.test(newPass);

        if (check) {
            this._pass = newPass;
        } else {
            console.log("Password should contain at least one uppercase letter, one lowercase letter, and one digit");
        }
    },
    // Getter for email
    get email() {
        return `Email is: ${this._email}`;
    },

    // Setter for email
    set email(newEmail) {
        // Improved email validation (basic check for simplicity)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(newEmail)) {
            this._email = newEmail;
        } else {
            console.log("Invalid email format");
        }
    }
};

console.log(userObject.user);
console.log(userObject.pass);
console.log(userObject.email);

// Try setting new values using setters
try {
    userObject.user = "NewUserName";
    userObject.pass = "NewPassword123";
    userObject.email = "newemail@example.com";
    console.log(userObject.user);
    console.log(userObject.pass);
    console.log(userObject.email);
} catch (error) {
    console.error(error.message);
}


//Mostly, 95% in market, class constructor method is used to get and set values.
//We see there's 3 ways to use getter and setter.. 
//1. Function based way which is not recommended because It'll make our code more complex..
//2. Object based way which is easy to understand and implement but less commonly used..
//3. Class Constructor Method which is widely used and most preferred one among developers..

//Still, there's another method of Object based
//Let's see its example..
// Object-based inheritance
const drinks = Object.create(userObject);
drinks.water = "Coca Cola";
console.log(drinks.water);
console.log(drinks.pass);
console.log(drinks.email);
// Here, const drinks = Object.create is a factory function.. Here it means,
// We are creating an object drinks from the prototype property of userObject..
//Here, drinks.pass is able to access the above userObject's property.
// console.log(drinks.email);  // This will be undefined, as email is not a property in userObject