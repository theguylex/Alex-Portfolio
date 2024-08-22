let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

