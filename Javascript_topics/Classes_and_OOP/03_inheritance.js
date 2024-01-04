class UserFunction{
    constructor(username){
        this.name = username;
    }
    sayHello(){
        console.log(`Hello Username is: ${this.name}!`);
        }
}
// If We've to make this User sometimes admin, sometimes ecommerce user, sometimes teacher and so on.
// class Admin extends UserFunction {  //Admin will inherit all properties of UserFunction
//     constructor (username, password) {
//         super(username);   //super keyword allows us to call the constructor method of the parent class
//         this.password = password;
//         }
//         seePassword() {
//             console.log("The Password is : " + this.password);
//             }
//             }
//             let johnDoe = new UserFunction('John Doe');
//             johnDoe.sayHello();      // Output: Hello Username is John Doe!
//             let maryStafford = new Admin ('Mary Stafford', '1234567890');
//             maryStafford.seePassword();     //Output: The Password is 1234567890
//             maryStafford.sayHello();       // Output: Hello Username is Mary Stafford!


class Teacher extends UserFunction{
    //We're overriding the parent constructor because user Teacher is changed and teacher may have diffn properties.
    constructor(username, email, password){
        super(username);
        //This super keyword will refer which class you were extending?
        // We were extending UserFunction class, so it goes inside Parent UserFunction's constructor 
        //And, it will automatically take 'this' references and make accessible for the child class i.e; Teacher
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`Adding a new course by ${this.name}`);

        //Here,addCourse is a method of the Teacher class. Don't confuse, It's not function here.
    }
}
let mycode = new Teacher('Tom','myemail.com','123');
console.log(mycode);                          // Output: UserFunction { name: 'Tom', email: 'myemail.com' }
mycode.addCourse();                           // Output: Adding a new course by Tom

// Let create new user again
let john = new UserFunction('John');
//Let check the user john has access of addCourse()
// john.addCourse();
//Uncomment above line if you want an error because john doesn’t have addCourse() in his property

john.sayHello();
//Here, John has access of sayHello()
// Also check, if child class Teacher has access of sayHello() or not.
// Then output will be: Hello Username is Tom!
mycode.sayHello();
// This is what we call inheritance. Child class can access the properties of parent class.

console.log(mycode===john);
// They are different objects. So output will be false.

//Now , checking if mycode is instances of UserFunction or not.
if (mycode instanceof UserFunction) { 
    console.log ("It's instance of UserFunction");
    } else {
        console.log("Not instance of UserFunction");
    }
    // Here, output will be Not instance of UserFunction

    // Also, checking if mycode is instances of Teacher or not.

console.log(mycode instanceof Teacher);
// Here, output will be true.
