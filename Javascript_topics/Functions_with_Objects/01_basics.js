function CalculateCartPrice(val1,val2, ...num){ //Here we using rest operator also called spread... operator but acc/ to conditions
return num;
}
console.log(CalculateCartPrice(200,300, 400, 5000));

const user ={
    username: 'Samundra',
    price: '199'
}
function handleobject(anyobject){
console.log(`The Username is: ${anyobject.username} and price is : ${anyobject.price}`);
}
// handleobject(user);
handleobject({
    username:"Devu",
    price:"255"
});

const mynewArr = [300, 400, 500, 1000];
function returnsecondValue(getArray){
return getArray[3];
}
// console.log(returnsecondValue(mynewArr));
console.log(returnsecondValue([2,3,4,5]));

function loginUserMessage(usergiven="Hero"){
    if(!usergiven){
        console.log("Please Enter a username ");
        return;
    }
    return `${usergiven} Just Logged In`;
}
let {usergiven: fun} = loginUserMessage;
console.log(loginUserMessage(fun="Sam"));