const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = '#777';
                break;
            case 'white':
                body.style.backgroundColor = '#fff';
                break;
            case 'blue':
                body.style.backgroundColor = '#3498db';
                break;
            case 'yellow':
                body.style.backgroundColor = '#f1c40f';
                break;
            case 'green':
                body.style.backgroundColor = '#2ecc71';
                break;
            default:
                // Default case, do nothing
                break;
        }
    });
});
