// Header Scroll Color Changee
let hamburgerIcon = document.querySelector('.navbar-toggle .fa-bars');
let closeIcon = document.querySelector('.navbar-toggle .fa-xmark');
let navbarMenu = document.querySelector('.navbar-menu');
// let navbar = document.querySelector('#nav');


hamburgerIcon.addEventListener('click', function () {
    navbarMenu.classList.toggle('active-toggle');
    // hamburgerIcon.classList.toggle('un-active');
    // closeIcon.classList.toggle('active');
})
// window.addEventListener('scroll', () => {
//     nav.classList.toggle('shadow', window.scrollY > 0);
// });
// Remove Menu On Scroll
// window.onscroll = () => {
//     menu.classList.remove('is-active');
//     menuLinks.classList.remove('active');
// }