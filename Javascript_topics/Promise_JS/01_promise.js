const promise1 = new Promise(function(resolve,reject){
    // Here, we created Promise using Promise Constructor. It Takes a function with two parameters, resolve and reject.
    //Do any Async Task
    //Like; DB Calls(i.e; connect, retrieve, load, inject, etc), Cryptography, Network call,etc
    setTimeout(function(){
        console.log('Async Task is Complete');
        // resolve('Data from Promise 1');
        resolve();
        //To connect with .then you have to call resolve.
        //Here, calling resolve() will connect to .then , then only the part of .then will execute only after
        //.... only after resolve().
    }, 1000)
 
})
promise1.then(function(){
    console.log('Promise Consumed');
}) //Inside .then we will get some callback() or let's say function
//Note: promise1.then() has direct connection with resolve only.
//Here, .Then Takes a callback function with the resolved value.

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 1000)
}).then(function(){ // Here, we directly used .then inside new Promise coz we are not storing Promise 2 in variable.
    console.log("I am inside .then of Promises 2 & Async 2 got resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'Samundra',
    email:'devin@gmail.com'
    });
    },1000)
})

promise3.then(function(user){ // Here, inside func U can expect some data will come. 
    //Here, Some object/array is coming from resolve so let we assume and let it define we're calling it as user.
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({userName:'Devin', Password:'Devin123'})
        } else{
            reject('ERROR: Invalid Username/Password')
        }
    },1000)
})

// Let we check for False also. // Below this all was for true that we're working for
// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= false;
//         if(!error){
//             resolve({userName:'Devin', Password:'Devin123'})
//         } else{
//             reject('ERROR: Invalid Username/Password')
//         }
//     },1000)
// })

// promise4.then().catch()
//Here it's the case if resolved we'll put '.then' and we'll take value from it.
//If rejected/(we got error),  we'll put 'catch'. In catch we'll take error message.
// promise4.then((user)=>{
//     console.log(user);
//     return user.userName;
// }) ... Let's check this return value is going to where.

// console.log(myname); 

// const myname = promise4.then((user)=>{
//     console.log(user);
//     return user.userName;
// })

// console.log(myname);

/*Here, This will create error from promise4.
And the Promise4 will be on <pending> State generating error:
1) UnhandledPromiseRejection Error:
This is an error message indicating an unhandled Promise rejection. 
-It's caused by the fourth Promise (promise4) being rejected, and there is no .catch() block to handle the rejection.
-It occurs when a Promise is created but not handled by .catch(), 
, or when a Promise returned in a then() or catch() block was not handled
*/
// +++ HERE'S A WAY ++++++++++
// const myname = promise4.then((user) => {
//     console.log(user);
//     return user.userName;
// }).catch((error) => {
//     console.error('Error:', error);
// });


promise4
.then((user) => {
        console.log(user);
        return user.userName;
}).then((myusername)=>{
    // Here, We can use async await instead of using .then()
    console.log(`Welcome ${myusername}!`);

}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log(`The Promise is either resolved or rejected`);
})

// Here, .catch Takes a callback function with the reason for rejection.
// If you don’t handle errors by attaching a .catch method to the promise,
// the error will bubble up to the Event Loop (which handles all promises).
// The event loop logs the error because there are no handlers to process it.

/*
Handling Promise Rejections:
Always handle promise rejections to prevent unhandled promise rejection errors. 
You can use .catch() or include a second parameter in .then() for rejection. We call it chaining.
*/

// const promise5= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({userName:'Papaji', Password:'Papa123'})
//         } else{
//             reject('Promise5 went Wrong')
//         }
//     },1000)
// })

// promise5.then()
// Let instead of using .then approach
// Let we use async await
/*
It's just like .then .catch But it waits for sometime to be work done.
If work is done, then it will go ahead to do its task. Else gives error in that place.
Mostly in scenario where, Database do not get connected and we don't want to go ahead, we use async.
Because, In case of .then, It goes on next line without waiting for result from DB.
*/

// async function consumeMyPromise(){
//    const response= await promise5;
//    console.log(response);
// }
// consumeMyPromise();
// This part me gives error. So, while using async function. Make sure you use try, catch block. Just like;
// async function consumeMyPromise(){
//     try{
//         const response= await promise5;
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
//  }
//  consumeMyPromise();

//  async function getAllUsers(){
//     const responses = await fetch('https://jsonplaceholder.typicode.com/users')
//     const ourdata=responses.json()
//     console.log(ourdata);
//  }
//  getAllUsers();

// async function getAllUsers(){
//     try{
//         const responses = await fetch('https://jsonplaceholder.typicode.com/users')
//     // const ourdata=responses.json()
//     // console.log(ourdata);
//     // console.log(responses);
//     // We can directly jsonify the response because, by default, Response Object has a method called as .json().
//     let ourdata=await responses.json();
//     console.log(ourdata);
//     }
//     catch(err){
//         console.log("Error is coming",err);
//     }
//  }
//  getAllUsers();


//++++++++++ANOTHER METHOD +++++++++++++

fetch('https://jsonplaceholder.typicode.com/userts')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Continue processing data or update UI
  })
  .catch((err) => {
    console.error('Fetch error:', err);
    // Display a user-friendly error message on the UI
    // Example: showErrorMessage('Something went wrong. Please try again later.');
  });
