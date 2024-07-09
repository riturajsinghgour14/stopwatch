let startTime, updatedTime, difference;
let interval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', function() {
    if (!running) {
        start();
    } else {
        stop();
    }
});

resetButton.addEventListener('click', reset);

function start() {
    startTime = new Date().getTime();
    interval = setInterval(update, 1000);
    startStopButton.textContent = 'Stop';
    running = true;
}

function stop() {
    clearInterval(interval);
    startStopButton.textContent = 'Start';
    running = false;
}

function reset() {
    stop();
    display.textContent = '00:00:00';
}

function update() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
