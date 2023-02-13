var dark_mode = document.querySelector('.dark');
var light_mode = document.querySelector('.light');
var notes = document.querySelector('#Notes');
var email_txt = document.querySelector('.email-txt');

dark_mode.addEventListener('click', () => {
    notes.classList.add('dark-mode');
    email_txt.classList.add('border-white');
});
light_mode.addEventListener('click', () => {
    notes.classList.remove('dark-mode');
    email_txt.classList.remove('border-white');
});


// checkmark

var correct_init = document.querySelector('.init');
var correct_clicked = document.querySelector('.clicked');

correct_init.addEventListener('click', () => {
    correct_init.style.display = "none";
    correct_clicked.style.display = "block";
});

correct_clicked.addEventListener('click', () => {
    correct_clicked.style.display = "none";
    correct_init.style.display = "block";
})


var email_txt = document.querySelector('.email-txt');
email_txt.addEventListener('click', () => {
    email_txt.classList.toggle('email-clicked');
})