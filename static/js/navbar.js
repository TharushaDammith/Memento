var menu = document.querySelector('.menu');
var nav_list = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    nav_list.style.transition = "height 1s";
    nav_list.classList.toggle('open-nav-list');
});