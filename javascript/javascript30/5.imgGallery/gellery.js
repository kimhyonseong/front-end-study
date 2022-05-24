let eachPanel = document.querySelectorAll('.panel');

function toggleOpen() {
    removeOpen();
    this.classList.toggle('open');
}

function toggleAction(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

function removeOpen() {
    eachPanel.forEach(x=>x.classList.remove('open'));
}

eachPanel.forEach(panel=>panel.addEventListener('click',toggleOpen));
eachPanel.forEach(panel=>panel.addEventListener('transitionend',toggleAction));