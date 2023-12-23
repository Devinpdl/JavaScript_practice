const userEmail =[];

if(userEmail){
    console.log("Araay is empty");
}
else{
    console.log("User Don't have an Email");
}

// Falsy Value:
// null, undefined, NaN, 0, -0, BigInt(0n), "", false are falsy values

//Truthy Values:
// 1, 'false', '0', " ", [], {}, function(){} are truthy values
let falsyValues = [null, undefined, NaN, 0, -0, BigInt(0n), "", false, 1, 'false', '0', " ", [], {}, function(){}];
falsyValues.forEach((value) => {
    if(!value){
        console.log(`${value} is a Falsy value`);
        } else {
            console.log(`${value} is not a Falsy value`)
            }
            })

    const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Obect is empty");
}

// +++++++ NOTES +++++++++++++++
// fasle == 0 is true;
// false == ''is true;
// 0 == '' is true; // This all is due to coercion

/*
 When comparing values of different types, JavaScript will attempt to convert one or both of the values to a common type.

In the case of 0 == " ", the empty string " " is coerced to a numeric value, and it becomes 0.
Therefore, the comparison becomes 0 == 0, which is true.

Here's a breakdown of the coercion that happens:

The empty string " " is falsy, but when used in a numeric context, it is coerced to the number 0.

The numeric value 0 on the left side and the numeric value 0 on the right side are then compared using the equality
operator (==).

Keep in mind that using the loose equality operator (==) can lead to unexpected results due to type coercion.
It's often recommended to use the strict equality operator (===), which checks both value and 
type without performing type coercion. If you use ===, 0 === " " would be false because the types are different 
(number and string).
*/

const iceCreamPie= 100;
iceCreamPie < 200 ? console.log("You can Buy Special Icecream"): console.log("You can't buy Special Icecream");;
// It's Ternary Operator!