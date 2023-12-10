// Chaining Maps, Filter Together
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers.map( (num) => num * 10) // Here we don't use return keyword coz scope{} is not started.
.map((num)=>num +1)
.filter((num)=> num > 40)
/*
* Here, chaining maps and filter together. 
// .Map and Filter does return values but not by forEach.
*/
console.log(newNums);