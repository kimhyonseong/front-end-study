function clockSec() {
    let hourDiv = document.querySelector('.hour');
    let minDiv = document.querySelector('.min');
    let secDiv = document.querySelector('.sec');

    let sec = 90;
    let min = 90;
    let hour = 90;
    setInterval(function () {
        sec += 6;
        secDiv.style.transform = `rotate(${sec}deg)`;

        if (sec % 360 === 90) {
            min += 6;
            minDiv.style.transform = `rotate(${min}deg)`;
        }

        if (sec % (360*6) === 90) {
            hour += 6;
            hourDiv.style.transform = `rotate(${hour}deg)`;
        }
    },1000)
}

clockSec();