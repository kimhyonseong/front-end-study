let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelectorAll('button');

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    //console.log({now, then});
    displayTimeLeft(seconds);
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

// 남은 시간 보여주기
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${
        remainderSeconds}`;
    //console.log({minutes, remainderSeconds});
    timerDisplay.textContent = display;
}

// 몇시에 끝나는지
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustHour}:${minutes < 10 ? '0' : ''}${
        minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);

    timer(seconds);
    console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //const mins = document.querySelector('[name="minutes"]').value;
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})