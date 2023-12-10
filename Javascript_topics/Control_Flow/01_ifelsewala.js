//if
// const temp = 45;
// if(temp<46){
// console.log("Temperature is Okay");
// }
// else{
//     console.log("Temperature is too hot!");
//     }
//     console.log("100% Executed");

// const score = 200;
// if (score>100){
//    let power = "Fly";
//     console.log(`The power of user is ${power}`);
// }
// console.log(`The power of user is ${power}`); //Can't accessible due to if {} block 
//If we use var then the block scope of if is violeted and can be accessible which is dangerous. so use let,const keyword
// function isEven(number) {
//     return number % 2 === 0;
//   }
  
//   let myNumber = 10;
//   let secondno = 21;
  
//   if (isEven(secondno="22")) { // If the value is not given 21 default value will be used.
//     console.log(secondno + ' is even.');
//   } else {
//     console.log(secondno + ' is odd.');
//   }
//   let x;

//if (x = 5 > 0) { // We can't declare and initialize inside if condition parenthesis (). But we can declare inside block
// Scope like inside of if() { let x =1;}
   /*In this case, the variable x is declared outside the if statement and is assigned the value of the expression 5 > 0.
     The condition then evaluates based on the truthiness of the assigned value.  
     */ 
//     console.log('x is positive.');
//   } else {
//     console.log('x is non-positive.');
//   }
  
//   const balance = 1000;
// //   if(balance>500) console.log("test"), console.log("Love you");
// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<800){
//     console.log("Still less than 800");
// }
// else if(balance<100){
//     console.log("You don't have enough balance");
// }
// else{
//     console.log("You're fired");
// }

// const userloggedIn = true;
// const DebitCard = false;
// if (userloggedIn && DebitCard){
//     console.log("Yes you can log in");
// }
// else{
//     console.log("You cannot log in");
// }
const userloggedIn = true;
const DebitCard = false;
const userloggedInfromGoogle = true;
if (userloggedIn && userloggedInfromGoogle || DebitCard){
    console.log("Yes you can log in");
}
else{
    console.log("You cannot log in");
}
