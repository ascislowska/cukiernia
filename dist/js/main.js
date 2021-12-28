const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav_item');
const title = document.querySelector('.title');
const body = document.querySelector('body');
let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        menuBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        menuBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuItems.forEach(item => item.classList.remove('open'))
        showMenu = false;
    }
} 
function showTitle() {
    title.classList.add('title_loaded');
}

menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('load', showTitle);