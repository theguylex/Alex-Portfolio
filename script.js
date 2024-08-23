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