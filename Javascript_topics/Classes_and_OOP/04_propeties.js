class UserFunction{
    //It's just class name not userFunction function() actually
    constructor(username){
        this.name= username;
    }
    showName(){
        console.log(`Hello, my name is ${this.name}`);
        }

        // Now we make method or properties.
        // We're wanting here that, as soon as user is created,
        //The user gets unique ID
        
        // createID(){
        //     return `123`;
        // }
        static createID(){
            return `123`;
            //Below Devin.createID() can't access this method anymore.
            //Because it's a static method and doesn't know anything about the instance of Devin User.

        }

    }

    const Devin = new UserFunction('Devin');
    // console.log(Devin.createID());

//In many situations, we don't want createID() method's access to be given to the all objects from the class where
// it was actually instantiated.
// Put static keyword in front of the methods.
// Static does stops that methods or properties from getting access that whatever we do with variable like Devin above.
// Static means belongs to the class itself rather than an instance of a class.

class Teacher extends UserFunction{
    constructor(username, email){
        super(username);
        this.email=email;

    }

}
const iphone = new Teacher('iphone','iphone@gmail.com');
// iphone.showName();

// createID() is accessible or not?
// Lets see

console.log(iphone.createID());

//Here, as soon as we write static in front of the method name.
//It don't give to access to it's child also.
//It also don't allow to inherit the properties from parent to child class.
