let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});


// let newAbtTxt = document.getElementById('moreTxt');
// document.getElementById('more').addEvenetListener('click', function() {
//     newAbtTxt.style.display = 'block';
// });

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const textarea = document.getElementById('textarea').value.trim();
    let message = '';

    switch (true) {
        case !fullname:
            message = 'Fullname is required.';
            break;
        case !email:
            message = 'Email is required.';
            break;
        case !subject:
            message = 'Subject is required.';
            break;
        case !textarea:
            message = 'Textarea is required.';
            break;
        default:
            message = 'Form submitted successfully!';
    }

    document.getElementById('validation-message').innerHTML = message;
}); 