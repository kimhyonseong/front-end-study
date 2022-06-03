const nav = document.querySelector('#main');
const topNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topNav) {
        //nav.style.position = 'fixed';

        // 포지션이 fixed로 변경되면 요소가 빠지면서 그 뒤 엘리먼트들이 빠진 요소 크기만큼 올라옴
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        //nav.style.position = 'relative';
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = '0';
    }

    console.log( window.scrollY,topNav);
}

window.addEventListener('scroll', fixNav);