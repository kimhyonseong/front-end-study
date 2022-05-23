let eachPanel = document.querySelectorAll('.panel');
eachPanel.forEach(function (ele) {
    ele.addEventListener('mouseover',function () {
        ele.style.flex = "3";
        ele.classList.add('open-active');
    })
    ele.addEventListener('mouseout',function () {
        ele.style.flex = "1";
        ele.classList.remove('open-active');
    })
})