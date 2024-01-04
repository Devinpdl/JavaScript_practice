// class User{
//     constructor(userName, email, password){
//         //Constructor is called as soon as an object is initialized from the class.
//         //That means, as soon as you used new keyword then the constructor is called.
//         this.userName = userName;
//         this.email = email;
//         this.password = password; // private property
//     }
//     encryptPassword(){
//         return `${this.password}123`;
//     }
//     changeuserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const mycode = new User('Devin','Hero@gmail.com','abc');
// console.log(mycode.encryptPassword());
// console.log(mycode.changeuserName());

// Now, if We don't know the class syntax. How we do ?
//Lets See;

//Behind the scene
function UserFunction(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}
UserFunction.prototype.encryptPassword= function(){
    return `${this.password}123`;
}
UserFunction.prototype.changeuserName= function () {
    return `${this.userName.toUpperCase()}`.trim();
    }
    let mycodeFun = new UserFunction("DevIn","Hero@gmail.com", "abcd");
    console.log(mycodeFun.encryptPassword());
    console.log(mycodeFun.changeuserName());