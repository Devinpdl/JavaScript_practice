// for (let i = 0; i < 10; i++) {
//     const element =i;
//     if(element===3){
//         console.log(" This line is Printed now and then only number 3 gets printed ");
//     }
//     console.log(element);
// }
// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j < 4; j++) {
//        console.log(`Inner Loop : ${j}`);
//     }
//     console.log(`Outer Loop: ${i}`);
// }

// for (let i = 1; i<=10; i++) {
//     console.log(`The Outer Loop Value is: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j + ' = ' + i*j);
//     }   
    /*
    Here The Inner Loops iterates 10th TIMES and after it finishes Comparisions
    It goes to the next outer loop iteration which means again inner loops starts from 1st Iteration
    */
// }

// let myArray = ['Apple', 'Banana','Avocado'];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// +++++++++++ BREAK AND CONTINUE ++++++++++++++
// for (let i = 1; i <=10; i++) {
//     if(i === 6){
//         console.log("Number:6 is Detected");
//         break;
//     }
//     // Once Condition is matched the code inside of condition gets executed and detects Break;
//     //Once Break is Detected it comes out of loop and stops looping from Line-41.i.e; Stops flow of looping.
//     console.log(`The Value of i is:  ${i}`);  
// }
for (let i = 1; i <=10; i++) {
        if(i === 6){
            console.log("Number:6 is Detected");
            continue;
        }
     // Once Condition is matched the code inside of condition gets executed and detects Continue;
// This continue forgets the code below of it and immediately gives control to for loop above i.e; Does increments
// And Checks Condition above before increment, inside for loop and never executes the code of Condition scope{} again;
//Once gets executed.
        console.log(`The Value of i is:  ${i}`);  
    }

    // Continue gives exception (forgive) for the specific one condition and can continue to execute for loop.
