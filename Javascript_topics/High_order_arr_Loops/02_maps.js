// Maps
// const map= new Map();
// map.get // map is an object in javascript, so that's why we can use methods by using .notation like .clear, .get etc
// map.set('name','John');
// console.log(map);
// //Maps are a collection of key-value pairs, where each value can be any type.
// let myMap = new Map([['name', 'John'], ['age', 30], ['city', 'New York']]);
// myMap.forEach((val,key)=>{
//     console.log(`${key}: ${val}`);
//     });
//     //WeakMap is similar to the Map object but it only stores weak references to its values. It means that if there are no other references
//     //WeakMap is similar to the Map object but it only stores weak references to its values. It means that if there's no other
//     //Weakmaps only store objects as keys and values, they do not increase the reference count of an object like normal maps.
//     //Weakmaps only store objects as keys and values, they don't increase the reference count of an object like regular maps do.
//     //Adding to the map
//     let myMap2 = new Map(myMap);
//     myMap2.set('job', 'Software Engineer');
//     console.log(myMap2);
//     //Deleting from the map
//     let myMap3 = new Map(myMap2);
//     myMap3.delete('age');
//     console.log(myMap3);
//     //Clearing the map
//     let myMap4 = new Map(myMap3);
//     myMap4.clear();
//     console.log(myMap4);
//     //Check if a key exists in the map
//     let myMap5 = new Map(myMap4);
//     myMap5.has('name') ? console.log("Key exists") : console.log("Key does not exist");
//     //Getting values by keys
//     let myMap6 = new Map(myMap5);
//     console.log(myMap6.get('name'));
//     //Setting multiple values at once
//     let myMap7 = new Map(myMap6);
//     myMap7.set({'hobby':'Reading','color':'Blue'},'Books and Blue Sky');
//     console.log(myMap7);
//     //Iterating over all entries
//     let myMap8 = new Map(myMap7);
//     for (let [k,v] of myMap8) {
//         console.log(`${k} : ${v}`);
//         }
//         //Converting maps into JSON format
//         let myMap9 = new Map(myMap8);
//         var jsonObj = {};
//         myMap9.forEach((value, key) =>{jsonObj[key]=value});
//         console.log(JSON.stringify(jsonObj));


// Maps
// const map= new Map();
// map.set('NPL','NEPAL');
// map.set('IND','INDIA');
// map.set('US','United States Of America');
// map.set('FR',"France");
// map.set('NPL','NEPAL');
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
//This will print all the value in key-pair values.
// To Avoid this use destructuring like using [] array just like; [key,value]
// For Eg;
// for (const [key,value] of map){
//     console.log(`Country Code: ${key}, Country Name: ${value}`);
//     console.log(key, ':-',value);
//     //Thus we can use key and value differentely by using destructuring as like [key,value]
//   }
// // IF we do have Objects, then can we use for(of) to map key-value pair in map?

// const myObject = {
//     'game1':'NFS',
//     'game2':'GTA',
//     'game3':'PUBG',
//     }
//     // for (const [key,value] of myObject) {
//     //     console.log(`Game Code: ${key}, Game Name: ${value}`);
//     //     } -----> This code doesn't work
//     // We need to convert object to iterable object first before doing so.
//     function objToMap(obj){
//         const map = new Map();
//         for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 map.set(key, obj[key]);
//                 }
//                 }
//                 return map;
//                 }
//                 const mapFromObject = objToMap(myObject);
//                 console.log(mapFromObject);

// const myObject ={
//     js :'Javascript',
//     cpp: "C++",
//     rb: "Ruby",
//     swift:'Swift By apple'
// }
// for (const key in myObject) {
//         // console.log(key); // Yeti Key aaisakye pxe Object nikaalne easy tarika xa..
//         // console.log(myObject[key])  // Yeti Value aaisakye pxe Object nikaalne easy tarika x
//         // Or, You can write as like this too:-
//         console.log(`${key} is for :- ${myObject[key]}`)
//     }

    // Similarly doing for Array
    // let arr = ['js','cpp','rb'];
    // for (const key in arr) {
    //     console.log(arr[key]);
    // }

//     const map= new Map();
// map.set('NPL','NEPAL');
// map.set('IND','INDIA');
// map.set('US','United States Of America');
// map.set('FR',"France");
// map.set('NPL','NEPAL');

// for (const key in map) {
//      console.log(key);   
//     } ..---> This doesn't work because it's not iterable over map objects okay?
/*
To iterate over a Map, you should use the Map methods such as forEach or convert it to an array using the spread
operator or Array.from().
*/
// const map = new Map();
// map.set('NPL', 'NEPAL');
// map.set('IND', 'INDIA');
// map.set('US', 'United States Of America');
// map.set('FR', 'France');
// map.set('NPL', 'NEPAL');

// map.forEach((value, key) => {
//     console.log(key, value);
// });

// const map = new Map();
// map.set('NPL', 'NEPAL');
// map.set('IND', 'INDIA');
// map.set('US', 'United States Of America');
// map.set('FR', 'France');
// map.set('NPL', 'NEPAL');

// const mapArray = [...map];

// for (const [key, value] of mapArray) {
//     console.log(key,':-',value);
// }

// We can also use  the forEach method or the spread operator with the Map.entries() method to retrieve
// Key Value Pair.


// retrive key-value pair in objects using `for...in` loop

const myObject = {
    key1: 'Name',
    key2: 'value2',
    key3: 'value3'
};

for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        const value = myObject[key];
        console.log(`${key}: ${value}`);
    }
}