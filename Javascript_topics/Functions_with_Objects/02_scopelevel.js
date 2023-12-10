function one(){
    const username ="Samundra";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "Samundra"
    if(username==="Samundra"){
        const website= " Youtube";
        // console.log(username + website);
    // console.log(website); First error
}
// console.log(username);
}

// ++++++++++++++++ INTRESTING +++++++++++
console.log(addone(2));
function addone(num){
return num +1;
}
// console.log(addTwo(5)); // This is Hoisting Problem, i.e; When you store a function in a variable u cannot 
//access function before it's declaration
// But in above console.log(addone(2));// you can access coz it's just function declaration and no storing a func into variables
const addTwo = function(num){
return num+2;
}
