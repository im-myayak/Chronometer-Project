let thread_id, time_in_minutes = 00,
    time_in_seconds = 00;
let start_element = document.getElementById("start_id"),
    stop_element = document.getElementById("stop_id"),
    reset_element = document.getElementById("reset_id");
display();

stop_element.setAttribute("disabled", true);
reset_element.setAttribute("disabled", true);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function display() {
    let minutes = time_in_minutes < 10 ? `0${time_in_minutes}` : `${time_in_minutes}`;
    let seconds = time_in_seconds < 10 ? `0${time_in_seconds}` : `${time_in_seconds}`;
    document.getElementById("counter").innerHTML = minutes + ":" + seconds;
}

function time_getting_function() {
    time_in_seconds += 1;
    if (time_in_seconds == 60) {
        time_in_minutes += 1;
        time_in_seconds = 0;
    }
    display();
}

function start_function() {

    thread_id = setInterval(time_getting_function, 1000);
    start_element.setAttribute("disabled", true);
    stop_element.removeAttribute("disabled");
    reset_element.setAttribute("disabled", true);
}

function stop_function() {
    clearInterval(thread_id);
    stop_element.setAttribute("disabled", true);
    reset_element.removeAttribute("disabled");
    start_element.removeAttribute("disabled");
}

function reset_function() {
    time_in_seconds = 0;
    time_in_minutes = 0;
    display();
}