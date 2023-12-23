// const Me = {
//     name: "Samundra",
//     0: 2,
//     1: "Hero",
//     6: 4
// }
// console.log(Me[0]*Me[6]);
// console.log(Me.name);
// console.log(typeof(Me));
// console.log(Array.isArray(Me));

const mysymb = Symbol("key1");
const Jsuser = {
    name: "Krishna",
    "full Name" : "Devin Paudel",
    age: 27,
    email: 'Samundra@google.com',
    [mysymb] : 'mykey1',
    isloggedIn:false,
    lastloggedInDays: ['Sunday','Monday'],
    profession: "Software Developer",
    hobbies: ["Reading","Travelling"],
    skills:["Java","Python","JavaScript"],
    address:{
        street:"5th Main Road",
        city:"Bangalore"
        }
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full Name"]);// Use of Square Notation, Can't access using .notation
// console.log(Jsuser[mysymb]);
// console.log(typeof([mysymb]));

// Jsuser.email = "Devu@yahoo.com";
// Object.freeze(Jsuser);
// Jsuser.email = "Random@gmail.com";
// console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello Js Users");
}
Jsuser.greetingTwo = function() {
    console.log(`Hello Js Users, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());