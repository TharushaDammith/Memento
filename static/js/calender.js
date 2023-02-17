var all_dates = document.querySelectorAll('.date');
for (i=0; i<all_dates.length; i++) {
    all_dates[i].innerHTML = i + 1;
}

function OpenSchedule(elem) {
    var dark_mode = document.querySelector('#Calender').className.includes('dark-bg');
    var link_list = elem.getAttribute('data-value').split(';');
    var event_list = document.querySelector('.event-list');
    var event_item_light =

    document.querySelectorAll('.event-item').forEach((item) => {
        item.remove();
    })

    if (dark_mode) {
        link_list.forEach((item) => {
            event_list.insertAdjacentHTML('beforeend', `<li class="event-item"><a class="event-link color-white" href="${item}">${item}</a></li>`);
        });
    }
    else {
        link_list.forEach((item) => {
            event_list.insertAdjacentHTML('beforeend', `<li class="event-item"><a class="event-link" href="${item}">${item}</a></li>`);
        });
    }
    var overlay = document.querySelector('.overlay');
    overlay.classList.add('show-overlay');

    var event_box = document.querySelector('.event-box');
    event_box.classList.add('open-event-box');
}

function CloseSchedule(overlay) {
    overlay.classList.remove('show-overlay');

    var event_box = document.querySelector('.event-box');
    event_box.classList.remove('open-event-box');
}


// DARK/LIGHT MODE

var light = document.querySelector('.light');
var dark = document.querySelector('.dark');

dark.addEventListener('click', () => {
    var calender = document.querySelector('#Calender');
    var all_boxes = document.querySelectorAll('.box');
    var all_links = document.querySelectorAll('.event-link');

    calender.classList.add('dark-bg');

    all_boxes.forEach((item) => {
        item.classList.add('dark-box');
    });

    all_links.forEach((item) => {
        item.classList.add('color-white');
    });
})

light.addEventListener('click', () => {
    var calender = document.querySelector('#Calender');
    var all_boxes = document.querySelectorAll('.box');
    var all_links = document.querySelectorAll('.event-link');

    calender.classList.remove('dark-bg');

    all_boxes.forEach((item) => {
        item.classList.remove('dark-box');
    });

    all_links.forEach((item) => {
        item.classList.remove('color-white');
    });
})