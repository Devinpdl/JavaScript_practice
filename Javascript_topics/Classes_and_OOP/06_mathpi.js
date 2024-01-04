// const Descriptor= Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(Descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObj=Object.create(null);

const myObject = {
    name:'Coke',
    price:40,
    isAvailable:true,

    Orderbook: function(){
        console.log("Your Order is not Booked!");
        //This returns whole method and function.
        // When we want only key, values pair.. Then we do
        // if(typeof value !== 'function'){
        //     // This checking does stop returning method and function from above myObject.
        //     console.log(`${key} : ${value}`);
        // }... It's part of below for of loop.

    }
}
// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject));
// Output is undefined. Because we're saying give the property's descriptor.
// But there are no properties in this object that belong to it. It only has inherited properties from its prototype (which is null).
//So, we've to give which properties descriptor you're wanting. Look For Eg;
// console.log(Object.getOwnPropertyDescriptor(myObject,'name'));
//Now, you can get the properties descriptor.

//Now, to change the properties of the own's Object.
// Object.defineProperty(myObject,'price',{
//     // writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(myObject,'price'));
// //This will stop printing price and only name : Coke, isAvailable : true will get display

Object.defineProperty(myObject,'price',{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(myObject,'price'));
//Now, the price gets display and let us to display it and it's iterable too.


// for (const [key,value] of myObject) {
//     console.log(`${key} : ${value}`);
// }
// Output: TypeError: myObject is not iterable
//Object is bydefault iterable in some cases and not iterable in most cases.

//Let, Make it iterable.

for (let [key,value] of Object.entries(myObject)) {
    if(typeof value !== 'function'){
        // function vayena vani maatrai haamro console run hunxa else hundeina.
        // This checking does stop returning method and function from above myObject.
        console.log(`${key} : ${value}`);
    }
}

//We have two ways to make it iterable.
//1st Way
// myObject[Symbol.iterator] = function () {
//     let index = 0;
//     return {
//         next: () => ({ done: index >= 3, value: this['item' + (++index)] })
//     };
// };

// let iterator = myObject[Symbol.iterator]();
// let iterable = iterator.next(); // Correct method is 'next' instead of 'iterator'

// while (!iterable.done) {
//     console.log(iterable.value);
//     iterable = iterator.next();
// }

            //Output: item1, item2, item3
            //2nd Way
            // console.log(...myObject.keys());
            // console.log(...myObject.values());
            // console.log([...myObject.entries()]);
            /*
            Here entries() method returns an array of [key,value].
            So when using spread operator on it, It will take each element from that array as separate argument.
            So when using spread operator we are converting that into individual elements.*/
            /*
            We also have a method called hasOwnProperty().
            It will only check whether this object has this particular key or not.
            Not checking the prototype chain. */
            /*
            In JavaScript every thing is an object including functions.
            Functions are objects too.
            They have there own properties like constructor,prototype etc.
            But they don’t have there own keys unlike normal objects.
            If we try to access any property on function it will always say undefined.
            Because properties are present in the prototypes of the function.
            To access those properties we need to use call apply or bind methods.
            Call/Apply methods allow us to invoke a function with a specific context i.e., this keyword points to something other then what it normally
            Call and Apply methods take this as a argument where this inside call/apply represents
            the current context i.e., the object on which these methods were called.
            Bind doesn’t take this as a argument but creates a new function with this as its own context.
            So whenever we call that newly created function this will be pointing to what ever object was passed while calling through call or bind.*/
            /*
            So whenever we call that newly created function this will be pointing to the original object.*/