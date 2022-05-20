let name1="Devin Samundra";
        console.log("| Hello "+name1 +"."); //IN the Inspect
        console.log('Console writing');
        //Document.write("| Hello "+name1 +".");
const Principle=10000;
const time=2;
const rate=12;
const interestRate=Principle*time*rate/100;
document.write(" <b> Your Interest Rate is : </b> " +interestRate + " ");

//Now Primitive values are; Strings,number, boolean values, undefined and null

let Proven=true; // Boolean Literal true or false
let me="Samundra Paudel"; // String values of a variable
let firstName=undefined; // undefined values .  Also javascript is case sensitive
/* firstName and FirstName are different variable */
let LastName=null; /* Null is assigned to variable because in case if there is needed to clear the values 
if no value is selected by the user then it is needed to clear the values of the variable */

//When We need to Accessing the Name property
let person={
    age:20,
    name:"Susi"
} /* Here person is an object with Curly Braces defining each property with respective key values ; we call pair*/

//DOT NOTATION TO ACCESS THE EACH PROPERTY 
person.age=23; // PERSON IS THE NAME OF OBJECT AND AGE IS THE PROPERTY AND IT CHANGES THE AGE VALUE OF AN OBJECT PERSON
person.name="Devi";

//OTHER WAYS TO ACCESS THE PROPERTY IS USING BRACKET [] NOTATION
person['name']="parbati"; /*Inside the bracket notation pass the string with single or double quotation*/
console.log(person.name);
//Now typeof Element in console
/*
typeof firstName
'undefined'
typeof me
'string'
typeof Proven
'boolean'
typeof LastName
'object'
*/

//...ARRAYS IN THE JAVASCRIPT 

let Colors = ['red','blue','green','purple','yellow'];
Colors[2]="Changed into new"; // Adding element in an array as the dynamic
Colors[2]="3";//In javascript an array can store different types; it can be string and number in the same array
console.log(Colors[2]); // To acces the index value we use bracket and index number just after the variable
console.log(Colors);

//...FUNCTIONS IN THE JAVASCRIPT

//...FUNCTION PERFORMING THE  TASK
function printline(name1,LastName) {
console.log('Hello '+name1 + ' ' +  LastName);
}
/* Here after printline; name1 and LastName is the parameter given at the time of function declaration*/
printline('Dear SITARAM','PAudel'); /*Here passing the values to the parameter; Dear SITARAM is an argument that
supplies for the parameter 'name1' inside the function printline() and PAudel is also an argument that
supplies inside the function's parameter called 'LastName'*/

//...FUNCTION CALCULATING THE VALUE
function square(number){
    return number*number;
}
console.log(square(7));