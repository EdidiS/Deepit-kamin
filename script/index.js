// Header Scroll Color Changee
let hamburgerIcon = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-xmark');
let navbarMenu = document.querySelector('.navbar-menu');
let navbarToggle = document.querySelector('.navbar-toggle');
// let navbar = document.querySelector('#nav');


navbarToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active-toggle');
    hamburgerIcon.classList.toggle('un-active');
    closeIcon.classList.toggle('active');
})
// window.addEventListener('scroll', () => {
//     nav.classList.toggle('shadow', window.scrollY > 0);
// });
// Remove Menu On Scroll
// window.onscroll = () => {
//     menu.classList.remove('is-active');
//     menuLinks.classList.remove('active');
// }