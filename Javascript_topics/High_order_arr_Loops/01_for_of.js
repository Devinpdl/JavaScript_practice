// For of

// ["", "", ""]; We put Strings in Array right?
// [{}, {}, {}]; We can also put Objects inside Array right?

// let myArray = [
//     { name: 'John', age: 22, gender: 'male' },
//     { name: 'Jane', age: 24, gender: 'female' },
//     { name: 'Bob', age: 25, gender: 'male' }
// ];

// console.log(myArray);
/*
In this example, myArray is an Array that contains three Objects. Each Object represents a person with properties 
like name and age.
To access the properties of these Objects, you can use dot notation or bracket notation.
*/

// console.log(myArray[0].name); // Output: John
// console.log(myArray[1]['age']); // Output: 30

/*
In the above code, myArray[0] accesses the first Object in the Array. .name then accesses the name property of that Object.
The same concept is applied to myArray[1]['age'], which accesses the age property of the second Object in the Array.
*/
// const arr= [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello Dear";
// for (const greet of greetings) { /* // ++++++++ For of loop+++++++++//// 
// Here greet is iteration just like declaring variable in for(let i=0....<<--Here Okay :-) )
// And greetings means we're looping under greetings which is just declared above..
// So here it will print each character one by one from start to end...
// Instead of greetings we can declare there as myArray if we're going to loop inside of myArray.
// */
//     if (greet==' ') continue; // Here space is discarded from printing.
//     console.log(`Each Char is ${greet}`);
// }
// In JavaScript, we can use the for...in loop to iterate over the enumerable properties of an object.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
};

const properties = Object.keys(person);

for (const index in properties) {
    const property = properties[index];
    console.log(`Index: ${index}, Property: ${property}, Value: ${person[property]}`);
}
/*
Keep in mind that this approach can lead to potential problems if the object contains non-enumerable properties.
Therefore, it's generally better to use the for...in loop for iterating over object properties.
*/