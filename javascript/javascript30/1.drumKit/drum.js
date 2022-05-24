function removePlayClass(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return false;
    e.target.classList.remove('play');
}

function soundPlay(e) {
    let square = document.querySelector(`.square[data-key="${e.keyCode}"]`);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    square.classList.add('play');
    sound.currentTime = 0;
    sound.play();
}

const key = Array.from(document.querySelectorAll('.square'));
key.forEach(keyBoard=>keyBoard.addEventListener('transitionend',removePlayClass));
window.addEventListener('keydown',soundPlay)


// window.addEventListener('keydown', function (event) {
//     let square = document.querySelector(`.square[data-key="${event.keyCode}"]`);
//     let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
//
//     if (!square) {
//         return
//     }
//     square.classList.add('play');
//     setTimeout(function () {
//         square?.classList.remove('play');
//     }, 100);
//
//     audio.currentTime = 0;
//     audio.play();
// })
