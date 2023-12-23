// const user = {
//     username: "Samundra",
//     price: "1000",
//     welcomeMessage : function(anyobject){
//         console.log(`${anyobject} Welcome ${this.username}!`);  // this refers to the object itself, not the global window object
//     }
// }
// user.welcomeMessage("Hello");
// user.username="Devin";
// user.welcomeMessage('Hello');
// console.log(user);
// console.log(user.username + ' has a balance of $' + user.price)

//  function hero() {
//     var username ="devin"
//     console.log(this.username); // Means we can't use .this keyword within global function scope
//     // we can use .this keyword only if it's within the Method context i.e; this is used within a method of an object.
// When .this is used within a function that is not a method of an object, it refers to the global object (or undefined in strict mode).
// }

// hero();
/*
In the welcomeMessage function within the user object, this refers to the object itself because
it's being invoked as a method of that object.
However, in the hero function, this refers to the global object (in a browser environment, 
it would be the window object). The reason for this behavior is that the hero function is not a method of any object; 
it's a standalone function.

When you declare a variable username inside the hero function, it becomes a local variable scoped to that function. 
If you want to access the username property of the user object within the hero function, 
you need to reference it explicitly using the object:
*/

/*2) Constructor Context:

When a function is used as a constructor with the new keyword, this refers to the newly created instance of the object.

*/
function ExampleConstructor() {
    this.property = "value";
}
const instance = new ExampleConstructor(); // 'this' refers to the 'instance' object
console.log(instance);
console.log(typeof(instance));

/* 3) Event Handlers:

In event handler functions, this refers to the element that triggered the event.
For eg;
document.getElementById("myButton").addEventListener("click", function() {
    console.log(this); // refers to the button element
});
*/

/* 4)Explicit Binding:

You can explicitly set the value of this using call, apply, or bind methods.

*/
const obj = {
    property: "value",
    method: function() {
        console.log(this.property);
    }
};

const otherObj = {
    property: "otherValue"
};

obj.method.call(otherObj); // 'this' refers to 'otherObj'
/*
Vannu ko artha otherObj ko property ko value haamile explicitly use garna paayem .call use garera 
current context object banauna paayem maathi method: function () { console.log(this.property)} vayetaa pni 
current context nei change garidiyem .call use garera maathi this.property use vayetaa pni!

*/

