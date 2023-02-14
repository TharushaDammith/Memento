var light_mode = document.querySelector('.light');
var dark_mode = document.querySelector('.dark');
var settings = document.querySelector('#Settings');
var border = document.querySelectorAll('.border');

dark_mode.addEventListener('click', () => {
    settings.classList.add('dark-mode');
    border.forEach((item) => {
        item.classList.add('border-white');
    })
})

light_mode.addEventListener('click', () => {
    settings.classList.remove('dark-mode');
     border.forEach((item) => {
        item.classList.remove('border-white');
    })
})


var eye = document.querySelector('.eye-pass');
var eye_slash = document.querySelector('.eye-slash-pass');
var password = document.querySelector('.password');

eye_slash.addEventListener('click', () => {
    eye_slash.style.display = "none";
    eye.style.display = "block";
    password.type = "text";
})

eye.addEventListener('click', () => {
    eye_slash.style.display = "block";
    eye.style.display = "none";
    password.type = "password";
})

var eye_confirm = document.querySelector('.eye-confirm');
var eye_slash_confirm = document.querySelector('.eye-slash-confirm');
var confirm_password = document.querySelector('.confirm-password');

eye_slash_confirm.addEventListener('click', () => {
    eye_slash_confirm.style.display = "none";
    eye_confirm.style.display = "block";
    confirm_password.type = "text";
})

eye_confirm.addEventListener('click', () => {
    eye_slash_confirm.style.display = "block";
    eye_confirm.style.display = "none";
    confirm_password.type = "password";
})


var light_theme = document.querySelector('.light-theme');
var dark_theme = document.querySelector('.dark-theme');

light_theme.addEventListener('click', () => {
    light_theme.style.display = "none";
    dark_theme.style.display = "flex";
})

dark_theme.addEventListener('click', () => {
    light_theme.style.display = "flex";
    dark_theme.style.display = "none";
})