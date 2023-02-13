var dark_mode = document.querySelector('.dark');
var light_mode = document.querySelector('.light');

var about_me = document.querySelector('#AboutMe');
var bi = document.querySelectorAll('.bi');

try {
    dark_mode.addEventListener('click', () => {
        about_me.classList.add('dark-mode');

        bi.forEach((item) => {
            item.classList.add('bi-white');
        })
    });

    light_mode.addEventListener('click', () => {
        about_me.classList.remove('dark-mode');

        bi.forEach((item) => {
            item.classList.remove('bi-white');
        })
    });
}
catch(err) {
    //pass
}