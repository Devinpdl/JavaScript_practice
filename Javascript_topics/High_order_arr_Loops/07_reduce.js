// Reduce Does have 3-built-in parameters. i.e:
/*
1)Accumulator:
*1st It does asks to InitialValue(i.e. defined in reduce function's last by using comma) what it is storing inside of it.
*2nd It stores The results that comes by calculating both InitialValue(that's defined in last by comma) + CurrentValue.
2)CurrentValue:
*It's the value which we are passing in each iteration.,may be just like Myarray=[1,2,3,4].
3)InitialValue:
*This parameter is optional and if you don't provide this then reduce will take first element as initialvalue.
*/
//reduce function can take any number of arguments but only one callback function.

/*
The reduce method in JavaScript is a powerful array method that is used to reduce an array to a single value. 
*/
let arr = [1, 2, 3];
// let sum = arr.reduce(function (accumulator, currentvalue) {
//     console.log(`Accumulator value is :${accumulator} and CurrentValue is : ${currentvalue}`);
//     return accumulator + currentvalue;
//     }, 1); // here by using comma, we are giving InitialValue of Accumulator.If not defined, it takes values from
//     // CurrentValue
//     console.log("Sum of array elements using reduce method : " + sum);

// const myTotal= arr.reduce((acc, curr)=> acc+curr ,1) // Same as above but in arrow function
// console.log('myTotal is:',myTotal);

const shoppingCart = [ {
    itemName: "js course",
    price: 500
},
{
    itemName: "react course",
    price: 800
},
{
    itemName: "node course",
    price: 600
},
{
    itemName: "python course",
    price: 700
},
{
    itemName: "java course",
    price: 900
}
]

let pricetoPay= shoppingCart.reduce((acc,item)=> acc + item.price, 0); // ,0 is our initial acc value
//Here reduce(item) is denoting every object in an Array above.
//Here we need only price, so we used .(Dot)notation and took the value of price only from the every Object.
console.log('Price to pay is: ',pricetoPay );