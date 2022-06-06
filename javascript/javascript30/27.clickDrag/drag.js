const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave',()=>{
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup',()=>{
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove',(e)=>{
    // 클릭 상태가 아니라면 리턴
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    console.log(x, startX)
    const walk = x - startX;
    // 오른쪽으로 가면 +, 왼쪽으로 가면 -
    console.log(walk);
    //slider.scrollLeft = walk;
    // 드래그 - 잡고 드래그하는 반대방향으로 가야해서 마이너스
    slider.scrollLeft = scrollLeft - walk;
});