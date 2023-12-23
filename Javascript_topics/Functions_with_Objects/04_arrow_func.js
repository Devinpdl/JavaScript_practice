// () => {} // This is basic arrow Function

const addTwo = (num1,num2) => {
return console.log(num1+num2);
}
addTwo(5,6);

// Now Understand Implicit Return in Arrow Function

const addThree = (num1,num2, num3) => num1+num2*num3; // Here we don't have to use return keyword and {} curly braces too.
// That's only available when the Code is one-line. Simply it's implicit Return
console.log(addThree(4, 8, 9));

//++++++++++++ INTERESTING ++++++++++++ We don't need to use return keyword in parenthesis i.e; () and 
// We have to use return keyword when we use curly braces {} .
// Mostly in React we use parenthesis ( ) and we don't use return keyword.. Means parenthesis understands it is implict
// return keywords.

const addFour = (num1,num2,num3) => (num1+num2*num3); // use of parenthesis means no need to use return keyword and curly braces.
console.log(addFour(2, 3, 5));

//Also, to return objects we need to wrapp up in parenthesis ().
// For eg;
const myobject = () => ({ username:"Samundra" });
console.log(myobject());
