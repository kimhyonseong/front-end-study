const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span')
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    //엘리먼트 크기와 뷰포트 등 정보를 제공함
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width : linkCoords.width,
        height : linkCoords.height,
        // 스크롤시 변경서 스크롤 값 더해줘야함
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));