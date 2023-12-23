// Singleton Object or Constructor Objects
const myobjects= new Object();
myobjects.name = "John";
myobjects.id = "123cc"
myobjects.age = 30;
console.log(myobjects);

// Object Literals of Multiple Instances
const newobject = {
    name: 'Devin',
    age: 25,
}
console.log(newobject);
console.log(typeof(myobjects));
console.log(typeof(newobject));

// Accessing Properties in an object using Dot Notation
console.log("Accessing properties");
console.log(myobjects.name + " is " + myobjects.age + " years old.");
// Updating the value of a property
myobjects.age = 40;
console.log(myobjects.name + " is now " + myobjects.age + " years old.");

const newuser = {
    email:"jane@gmail.com",
    fullname : {
        username: {
            firstName : "Jane",
            lastName : "Doe",
        }
    }
}
console.log(newuser.fullname?.username.firstName);
/*
We use ? because if there's a condition where if fullname exists then only go and use next methods
*/

const obj1={
    1:"a", 2:"b"
}
const obj2 ={
    3:"c", 4:"d"
}
// const obj3 = {obj1, obj2};
// const obj3= Object.assign({}, obj1,obj2);
const obj3 = {...obj1,...myobjects} // Again here use of ...Spread operator to assign objects into new Objects
console.log(obj3);

const newUsers = [
    {
        id : 1, 
        email: "Dev@gmail.com"
    },
    {
        id : 2,
        email: "John@yahoo.com"
    }
]
console.log(newUsers[0].email);
console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(newuser.hasOwnProperty('IsloggedIn')); // Whether newuser has IsloggedIn property available or not