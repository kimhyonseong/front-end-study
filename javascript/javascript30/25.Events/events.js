const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // 이벤트 부모, 자식으로 확산 중단 (버블링,캡쳐링 차단)
}

// divs.forEach(div => div.addEventListener('click', logText));
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once : true
}));

/*
이벤트
버블링 - 자신에서부터 부모노드까지 확산 (기본값)
캡처링 - 부모부터 자신까지 확산
once - 이벤트 오직 한번 실행
 */