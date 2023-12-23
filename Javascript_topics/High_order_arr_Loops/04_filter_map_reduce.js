// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach ( (item) =>{
//                //console. log (item);
//                return item;
// })
//  console. log(values);
// ++++ NOTE--> forEach doesn't have ability to return values.
// so we can use map instead of forEach in order to get the array with new elements.
// const num = [1,2,3,4,5,6,7,8,9,10];
// const newNums = num.filter((nu)=> nu >4) // Here we're not using {} scope property because
// // it's one line code of array function.,, here, nu is just callbackfunc where it acts as parameters too
// // So, no need to call the function here.
// console.log(newNums);

// const num = [1,2,3,4,5,6,7,8,9,10];
// const newNums = num.filter( (nu) =>{
//     return nu*2;
// });
// console.log(newNums);
/*
The issue here is with the usage of the filter method. The filter method is used to filter elements from an array 
based on a specified condition. In your code, you're trying to multiply each number by 2 inside the filter callback, 
but the filter function expects a condition that evaluates to either true or false.
*/
// +++++ For This  ++++ WE use mapping Function.
// For example
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result= arr.map((nu)=>{
//     return nu * 2;
// })
// console.log(result);
// +++ IMPORTANT +++ 
//When we start scope {} then there's no chance of execution Without writing return keyword.

// Filter is used to check the condition and if the conditions satisfies then it returns values.
//==============================
//==============================
// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr=arr.filter(x=> x % 2 === 0 )
// console.log(arr);
// console.log(typeof(arr));

// +++ USE OF forEach +++++++
// let myNumber=[1,2,3,4,5,6,7,8,9,10];
// let arr=[];
// myNumber.forEach((num)=>{
//     if(num>4){
//         arr.push(num); // We are putting the itens in empty array of the variable arr.
//         // here no need to write return keyword in forEach loop because it's not modifying existing array.
//         // But in map,filter method we have to write return keyword if we the function starts it's scope{}.
//     }
// })
// console.log(arr); 
const Books= [
{title: "Book One", genre: 'Fiction', publish: 1981, edition:2004 },

{title:"Book Two", genre: 'Non-Fiction', publish:1992, edition: 1992},

{title:"Book Three", genre: 'History', publish: 1999,edition:2007 },

{title:"Book Four", genre: 'Non-Fiction', publish: 1989,edition:2010 },

{title:"Book Five", genre: 'Science', publish: 2009, edition:2014 },

{title:"Book Six", genre: 'Fiction', publish: 1987, edition:2010 },

{title:"Book Seven", genre: 'History', publish: 1986, edition: 1996},

{title:"Book Eight", genre: 'Non-Fiction', publish: 1998, edition:2000},

{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,edition: 1989 },

{ title: 'Book Ten', genre: 'Fiction', publish: 1990, edition: 1995}
]

// const userBooks = Books.filter((bk)=>{
//     return bk.genre==="History"
// })
// console.log(userBooks);
// const lookBooks = Books.filter((pk)=>{
//     return pk.edition>2000;
// })
// console.log(lookBooks);

const lookBooks = Books.filter((pk)=>{
    return pk.edition>=2000 && pk.genre==="Non-Fiction" ;
})
console.log(lookBooks);
