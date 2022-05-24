window.addEventListener('DOMContentLoaded', function () {
    // let space = document.querySelector('input[name="spacing"]');
    // let blur = document.querySelector('input[name="blur"]');
    // let colors = document.querySelector('input[name="base"]');
    // space.addEventListener('change', function () {
    //     document.querySelector('img').style.padding = this.value+this.dataset.size;
    // })
    let inputs = document.querySelectorAll('.controller input');

    inputs.forEach(input => input.addEventListener('change',handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
})

function handleUpdate() {
    let fix = this.dataset.size || '';

    //document.querySelector('img').style.setProperty(ele,this.value + fix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+fix);
    console.log(this.value);
}