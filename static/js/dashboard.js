var side_nav = document.querySelector('.side-nav');
var side_menu = document.querySelector('.side-menu');

side_menu.addEventListener('click', () => {
    side_nav.classList.toggle('open-side-nav');
    side_menu.classList.toggle('side-menu-on');
})

var href_split = window.location.href.split('/');
var location_href = `${href_split[0]}//${href_split[2]}/`

var checkmark = 'static/images/correct.png'
var checkmark_clicked = 'static/images/correct-clicked.png'

window.addEventListener('click', (elem) => {
    if (elem.target.className == "checkmark") {
        if (elem.target.src == `${location_href}${checkmark}` ) {
           elem.target.src = checkmark_clicked;
        }
        else {
            elem.target.src = checkmark;
        }
    }
})


// Make the DIV element draggable:
dragElement(document.querySelector(".cache-box"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


var cache_btn = document.querySelector('.cache-btn');
var cache_box = document.querySelector('.cache-box');

cache_btn.addEventListener('click', () => {
    cache_box.classList.toggle('cache-box-on');
});

var minimize = document.querySelector('.minimize-cursor');

minimize.addEventListener('click', () => {
    cache_box.classList.remove('cache-box-on');
})

var cache_input = document.querySelector('.cache-input');

cache_input.addEventListener('click', () => {
    cache_input.focus();
})

var light = document.querySelector('.light');
var dark = document.querySelector('.dark');
var dashboard = document.querySelector('#Dashboard');
var text_area = document.querySelectorAll('textarea');
var side_link = document.querySelectorAll('.side-link');

var menu_hr = Array.from(document.querySelectorAll('.side-line'));
menu_hr.push(document.querySelector('.minimize'));

var box_list = Array.from(document.querySelectorAll('.note'));
box_list.push(cache_box);

dark.addEventListener('click', () => {
    dashboard.classList.add('dark-bg');

    menu_hr.forEach((item) => {
        item.classList.add('border-white');
    })

    box_list.forEach((item) => {
        item.classList.add('dark-box');
    })

    text_area.forEach((item) => {
        item.classList.add('color-white');
    })

    side_nav.classList.add('dark-side-nav');

    side_link.forEach((item) => {
        item.classList.add('color-white');
    })
})

light.addEventListener('click', () => {
    dashboard.classList.remove('dark-bg');

    menu_hr.forEach((item) => {
        item.classList.remove('border-white');
    })

    box_list.forEach((item) => {
        item.classList.remove('dark-box');
    })

    text_area.forEach((item) => {
        item.classList.remove('color-white');
    })

    side_nav.classList.remove('dark-side-nav');


    side_link.forEach((item) => {
        item.classList.remove('color-white');
    })
})