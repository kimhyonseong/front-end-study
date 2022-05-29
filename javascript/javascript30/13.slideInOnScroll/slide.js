function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        //정의
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        // 2. timeout 변수가 바로 null이 되지 않아 callNow는 false
        // 0. immediate는 무조건 true / timeout은 undefined로 callNow는 true
        let callNow = immediate && !timeout;
        // 3. timeout 변수가 null이 안되게 클리어
        clearTimeout(timeout);
        // 1. 0.02초 후에 timeout을 null로 만듦
        // -> 다음 timeout 사용 때 true로 만들기위해
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSide(e) {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight)
            - sliderImage.height / 2;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSide));