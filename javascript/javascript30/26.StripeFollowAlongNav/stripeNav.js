const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    //console.log("enter");
    this.classList.add('trigger-enter');

    // 서서히 밝아지게 하기위해 150ms 줌
    setTimeout(() => {
        // 조건식을 넣어 컨텐츠가 먼저 나오는걸 방지
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }}, 150);


    // 하얀 바탕 생기기
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height:dropdownCoords.height,
        width:dropdownCoords.width,
        //상단에 고정되어서 오프셋 필요
        top:dropdownCoords.top - navCoords.top,
        left:dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width',`${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`);
}

function handleLeave() {
    //console.log("leave");
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));

