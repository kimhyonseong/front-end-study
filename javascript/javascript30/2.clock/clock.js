let hourDiv = document.querySelector('.hour');
let minDiv = document.querySelector('.min');
let secDiv = document.querySelector('.sec');

function clockSec() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();

    let secDeg = (sec/60) * 360 + 90;
    let minDeg = (min/60) * 360 +90;
    let hourDeg = (hour/12)*360 +90;

    secDiv.style.transform = `rotate(${secDeg}deg)`;
    minDiv.style.transform = `rotate(${minDeg}deg)`;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;

}
setInterval(clockSec,1000);