// CREATE NOTE

var note_boiler = `<div class="note">
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
            </div></div></div>
        <ul class="note-list">
            <li class="note-item note-link">
                <p class="item-text">Open</p>
            </li>
            <li class="note-item note-delete" onclick="DeleteMenu(this)">
                <p class="item-text">Delete</p>
            </li>
        </ul>
    <div class="note-content">
        <textarea class="note-text">Write here...</textarea>
        <div class="note-options">
            <div class="date">02-02-2023</div>
            <img class="checkmark" src="static/icons/correct.png">
        </div>
    </div>
</div>`

function createElement() {
    dashboard = document.querySelector('#Dashboard');
    dashboard.insertAdjacentHTML('beforeend', note_boiler);

    note_list = document.querySelectorAll('.note');
    if (note_list.length >= 4) {
        dashboard.style.height = "initial";
    }
    else {
        dashboard.style.height = "calc(100vh - 91px - 6rem)";
    }
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

    if ((note_all.length <= 4) && (window.clientHeight > 850)) {
        dashboard.style.height = "calc(100vh - 91px - 6rem)";
    }
}