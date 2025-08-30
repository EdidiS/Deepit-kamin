// Header Scroll Color Changee
let hamburgerIcon = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-xmark');
let navbarMenu = document.querySelector('.navbar-menu');
let navbarToggle = document.querySelector('.navbar-toggle');
let nav = document.querySelector('#nav');
// let navbar = document.querySelector('#nav');


navbarToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active-toggle');
    hamburgerIcon.classList.toggle('un-active');
    closeIcon.classList.toggle('active');
})
window.addEventListener('scroll', () => {
    nav.classList.toggle('newNav', window.scrollY > 0);
    navbarMenu.classList.remove('active-toggle');
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('active-toggle');
            hamburgerIcon.classList.toggle('un-active');
            closeIcon.classList.toggle('active');
        })
    })

})
// Remove Menu On Scroll
// window.onscroll = () => {
//     menu.classList.remove('is-active');
//     menuLinks.classList.remove('active');
// }