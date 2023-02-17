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

    link_list.forEach((item) => {
        event_list.insertAdjacentHTML('beforeend', `<li class="event-item"><a class="event-link" href="${item}">${item}</a></li>`);
    });

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