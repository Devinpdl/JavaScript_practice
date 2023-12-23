(function hero(){ // It's Named IIFE (Coz it's written as Like Function)
    console.log(`Hello Dear`);
})();

( (name) =>{
    console.log(`Hello ${name}`);
} ) (`Samundra`)

// IIFE is used to solve/avoid the Global scope pollution which is sometimes defined under the regular function.
// IIFE does immediately executes where it is defined.