const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';  // 윤곽선 색
ctx.lineJoin = 'round';  // 선 꺽이는 부분
ctx.lineCap = 'round'; // 선 끝 처리
ctx.lineWidth = 10;
//ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    // 시작점
    ctx.moveTo(lastX,lastY);
    // 끝점
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke(); // 그리기 시작
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++;

    if (hue > 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing=true;
    [lastX,lastY] = [e.offsetX,e.offsetY];  //클릭 했을때를 시작점으로 만듬
});
canvas.addEventListener('mouseup', ()=>isDrawing=false);
canvas.addEventListener('mouseout', ()=>isDrawing=false);