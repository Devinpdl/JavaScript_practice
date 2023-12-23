// Generate a random Color First
const randromColor = function(){
    const hex = "0123456789ABCDEF"
    let color= '#'
    for(let i=0; i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
        console.log(hex[i]);

    }
    return color;
};
// console.log(randromColor());
let IntervalId;
// const StartChangingColor = function(){
//     IntervalId = setInterval(changeBackgroundColor, 1000);
//     function changeBackgroundColor(){
//         document.body.style.backgroundColor = randromColor();
//     }
// } ... This piece of code doesn't work. So we do write
// the following instead:
// const StartChangingColor = function(){
//     if (!IntervalId) {
//         // Code here will only run if there is no interval is there.
//         IntervalId = setInterval(changeBackgroundColor, 1000);
//         function changeBackgroundColor(){
//             document.body.style.backgroundColor = randromColor();
//         }
//     }
// }

// Function to start changing the background color at intervals
const StartChangingColor = function(){
    if (!IntervalId) {
        // Start the interval only if it's not already running
        IntervalId = setInterval(changeBackgroundColor, 1000);

        function changeBackgroundColor(){
            const newColor = randromColor();
            document.body.style.backgroundColor = newColor;

            // Log a message indicating the color change
            console.log(`Color changed to: ${newColor}`);
        }
    }
}

const StopChangingColor = function() {
    clearInterval(IntervalId);
//Here, we are overriding the IntervalId which is changing over time repeatedly.
//So, to avoid writing unclean code. We Do flush out it by assigning a null value.
IntervalId = null;
/*
//++++++ After assigning null it's best practice to write code as like this; ++++++++
const StartChangingColor = function(){
if (!IntervalId) {
    // Code here will only run if there is no interval is there.
    IntervalId = setInterval(changeBackgroundColor, 1000);
    function changeBackgroundColor(){
        document.body.style.backgroundColor = randromColor();
    }
}
*/

    console.log("Changing Color is Stopped Now!");
}
document.querySelector('#startBtn').addEventListener('click', StartChangingColor);
document.querySelector('#stopBtn').addEventListener('click', StopChangingColor);