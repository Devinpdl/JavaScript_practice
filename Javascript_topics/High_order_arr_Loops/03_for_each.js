const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function(item){ /*
// Here inside forEach loop while defining function we don't need to declare its name
// as like function myfunc(){ } ... parameter named val or item itself extracts its value in each iterations
// no need to define function name and calling function seperately. That's why it's named as callbackfunction
// */
// console.log("I love to code in "+ item); // This is the function block working.
// })
// ++++ You can also use Arrow function for the above +++++

// coding.forEach((item)=>{
//     console.log("I love to code in "+ item)  // Here 'this' refers to the current element of array
//     });
    // function printMe(item){
    //     console. log(item);
    // }   

    // coding.forEach(printMe); // Here, we are giving printMe as a parameter..
    // Here, we don't need to call the function too inside of this forEach methods.
    // Because here we have passed the function directly into the method. So there is no need to call that function separately.
    // Because here, printMe is already defined function so that will be called automatically.
    // coding.forEach((item, index, arr)=> { // forEach doesn't have access of only one parameters..
    //     //It also has access to whole array, indexes also.
    //     console.log(item, index);
    //     console.log(arr);
    // })

    const Hero = [
        {
        name: "Batman", age:25,
        language: "Javascript",
        power: "Super fast"
    },
{
    name: "Spiderman", age:22,
    language: "Ruby",
    power: "Easy syntax"
},{
    name: "Thor", age:30,
    language: "Java",
    power: "Object oriented"
}];

Hero.forEach((item)=>{
console.log(item.name);
})

Hero.forEach((item)=>{
    if (item.name==="Thor"){
        console.log(item);
        console.log(typeof(item));
}})