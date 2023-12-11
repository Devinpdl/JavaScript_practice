// const btns = document.querySelectorAll('.button');
// const body =document.querySelector('body');

// btns.forEach(function(btn){
// console.log(btn);
// btn.addEventListener('click', function(e){
//     console.log(e);
//     console.log("Element:", e.target);
//     console.dir(e.target);
//     /* The console.dir method is useful for inspecting the properties of an object in a more detailed way. 
//     This should show the full HTML representation of the element in the console.
//     */
//    if(e.target.id==='grey'){
//     body.style.backgroundColor='grey'; // Or = e.target.id
//    }
//    if(e.target.id==='white'){
//     body.style.backgroundColor=e.target.id
//    }
//    if(e.target.id==='blue'){
//     body.style.backgroundColor=e.target.id
//    }
//    if(e.target.id==='yellow'){
//     body.style.backgroundColor=e.target.id
//    }
//    if(e.target.id==='green'){
//     body.style.backgroundColor=e.target.id
//    }
//    if(e.target.id==='black'){
//     body.style.backgroundColor=e.target.id
//    }
// });
// });

const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log("Element:", e.target);
        console.dir(e.target);

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
            case 'blue':
            case 'yellow':
            case 'green':
            case 'black':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                // Default case, do nothing
                break;
        }
    });
});
