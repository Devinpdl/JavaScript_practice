const course ={
    coursename: " Js course in Nepali",
    duration:"10 weeks",
    instructorname: "Mr. Samundra Paudel",
    Price : "1000"
}
console.log(course);

const {instructorname: instructor} = course; // here destructuring is happenning within curly braces{}
console.log(instructor);