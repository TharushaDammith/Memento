// CREATE NOTE

function createElement() {
    var dark_mode = dark_mode = document.querySelector('#Dashboard').className.includes('dark-bg');

var note_boiler_light = `<div class="note">
    <div class="note-img">
        <div class="note-menu" onclick="OpenMenu(this)">            <div class="dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="dot-row middle-dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div></div>
    </div>
        <ul class="note-list">
            <li class="note-item note-link box" onclick="RedirectToNote()">
                <p class="item-text txt">Open</p>
            </li>
            <li class="note-item note-delete box" onclick="DeleteMenu(this)">
                <p class="item-text txt">Delete</p>
            </li>
        </ul>
    <div class="note-content box">
        <textarea class="note-text txt">Write here...</textarea>
        <div class="note-options">
            <div class="date">02-02-2023</div>
            <img class="checkmark" src="static/icons/correct.png" onclick="MarkAsChecked(this)">
        </div>
    </div>
</div>`

var note_boiler_dark = `<div class="note">
    <div class="note-img">
        <div class="note-menu" onclick="OpenMenu(this)">            <div class="dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="dot-row middle-dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="dot-row">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div></div>
    </div>
        <ul class="note-list">
            <li class="note-item note-link box dark-box" onclick="RedirectToNote()">
                <p class="item-text txt color-white">Open</p>
            </li>
            <li class="note-item note-delete box dark-box" onclick="DeleteMenu(this)">
                <p class="item-text txt color-white">Delete</p>
            </li>
        </ul>
    <div class="note-content box dark-box">
        <textarea class="note-text txt color-white">Write here...</textarea>
        <div class="note-options">
            <div class="date">02-02-2023</div>
            <img class="checkmark" src="static/icons/correct.png" onclick="MarkAsChecked(this)">
        </div>
    </div>
</div>`


    dashboard = document.querySelector('#Dashboard');
    if (dark_mode) {
        dashboard.insertAdjacentHTML('beforeend', note_boiler_dark);
    }
    else {
        dashboard.insertAdjacentHTML('beforeend', note_boiler_light);
    }

    FixHeight();
}

var create_btn = document.querySelectorAll('.create');
create_btn.forEach((item) => {
    item.addEventListener('click', createElement)
})


// OPEN MENU

function OpenMenu(elem) {
    menu_all = document.querySelectorAll('.note-menu');
    list_all = document.querySelectorAll('.note-list');

    for (i=0; i<menu_all.length; i++) {
        if (elem == menu_all[i]) {
            list_all[i].classList.toggle("note-list-on");
        }
    }
}

// DELETE MENU

function DeleteMenu(elem) {
    delete_all = document.querySelectorAll('.note-delete');
    note_all = document.querySelectorAll('.note');

    for (i=0; i<delete_all.length; i++) {
        if (elem == delete_all[i]) {
            note_all[i].remove();
        }
    }

    FixHeight();
}


// CHECKMARK

function MarkAsChecked(elem) {
    if (elem.src.split('/').at(-1) == 'correct.png') {
        elem.src = "static/icons/correct-clicked.png";
    }
    else {
        elem.src = 'static/icons/correct.png';
    }
}



// DASHBOARD HEIGHT

function FixHeight() {
    dashboard = document.querySelector('#Dashboard').style;
    note_length = document.querySelectorAll('.note').length;

    if (window.innerWidth > 850) {
        if (note_length >= 4) {
            dashboard.height = 'initial';
        }
        else {
            dashboard.height = 'calc(100vh - 91px - 6rem)';
        }
    }
    else if (window.innerWidth < 600) {
        if (note_length >= 2) {
            dashboard.height = "initial";
        }
        else {
            dashboard.height = 'calc(100vh - 91px - 6rem)';
        }
    }
    else {
        console.log(1);
        if (note_length >= 3) {
            dashboard.height = "initial";
        }
        else {
            console.log(2);
            dashboard.height = 'calc(100vh - 91px - 6rem)';
        }
    }
}


// OPEN/CLOSE SIDEBAR

function Sidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-on');
}


// CACHE BOX SHOW/HIDE

function ShowCacheBox() {
    cache_box = document.querySelector('.cache-box');
    cache_box.classList.toggle('cache-box-on');
}

function HideCacheBox() {
    cache_box = document.querySelector('.cache-box');
    cache_box.classList.remove('cache-box-on');
}



// DARK MODE & LIGHT MODE

var light = document.querySelector('.light');
var dark = document.querySelector('.dark');

dark.addEventListener('click', () => {
    DarkMode();
});

light.addEventListener('click', () => {
    LightMode();
});

function DarkMode() {
    var dashboard = document.querySelector('#Dashboard');
    var hr = document.querySelectorAll('hr');
    var sidebar = document.querySelector('.sidebar');
    var txt = document.querySelectorAll('.txt');
    var box = document.querySelectorAll('.box');

    dashboard.classList.add('dark-bg');
    sidebar.classList.add('dark-sidebar');

    hr.forEach((item) => {
        item.classList.add('border-white');
    });

    txt.forEach((item) => {
        item.classList.add('color-white');
    });

    box.forEach((item) => {
        item.classList.add('dark-box');
    });
}

function LightMode() {
    var dashboard = document.querySelector('#Dashboard');
    var hr = document.querySelectorAll('hr');
    var sidebar = document.querySelector('.sidebar');
    var txt = document.querySelectorAll('.txt');
    var box = document.querySelectorAll('.box');

    dashboard.classList.remove('dark-bg');
    sidebar.classList.remove('dark-sidebar');

    hr.forEach((item) => {
        item.classList.remove('border-white');
    });

    txt.forEach((item) => {
        item.classList.remove('color-white');
    });

    box.forEach((item) => {
        item.classList.remove('dark-box');
    });
}



// Redirect Url

function RedirectToNote() {
    goto_url = window.location.href.replace("dashboard", "notes");
    window.location.replace(goto_url);
}