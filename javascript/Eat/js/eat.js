const mainBox = document.querySelector('main');

const foodName = document.getElementById("food");

const cate = document.querySelector('.category');
const cateBtn = cate.querySelectorAll('label');
const foods = document.querySelectorAll('.food');

const rating = document.querySelector('.rating-star');
const ratingStar = rating.querySelectorAll('.star');
const ratingBtn = rating.querySelectorAll('input[type=radio]');

const loginBox = document.querySelectorAll('.login');
const loginInputs = loginBox.item(0).querySelectorAll('input');
const regiInputs = loginBox.item(1).querySelectorAll('input');

function toggleActive() {
    if (!this.classList.contains('a-fix')) {
        this.classList.toggle('active');
    }
}

function activeFix() {
    cateBtn.forEach(btn => {
        btn.classList.remove('a-fix');
        btn.classList.remove('active');
    })
    this.classList.add('a-fix');
    this.classList.add('active');
}

function colorStar(num = 0) {
    for (let i =0; i< 5; i++) {
        if (i <= num) {
            ratingStar.item(i).classList.add('yellow');
        } else {
            ratingStar.item(i).classList.remove('yellow');
        }
    }

    if (this.event.type === 'mouseleave') {
        for (let i =0; i< 5; i++) {
            if (ratingStar.item(i).classList.contains('fixedStar')) {
                ratingStar.item(i).classList.add('yellow');
            }
        }
    }
}

function fixStar(num = 0) {
    // 로그인 이동
    if (getCookie('user') === null) {
        console.log('no login');
        return false;
    }

    for (let i =0; i< 5; i++) {
        if (i <= num) {
            ratingStar.item(i).classList.add('fixedStar');
        } else {
            ratingStar.item(i).classList.remove('fixedStar');
        }
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1') + "=([^;]*)"
    ));
    let result = matches ? decodeURIComponent(matches[0]) : undefined;
    return result ? result.split('=')[1] : null;
}

function setCookie(name, value,options = {}) {
    options = {
        path: '/',
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name)+"="+encodeURIComponent(value);

    console.log(encodeURIComponent(value));

    for (let optionKey in options) {
        updatedCookie += `; ${optionKey}`;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += `=${optionValue}`;
        }
    }

    document.cookie = updatedCookie;
}

function toggleLabel(e) {
    const label = this.parentNode.querySelector(`label[for="${this.id}"]`);
    e.preventDefault();
    if (label === null) return 0;
    if (this.value.trim() === '') {
        label.classList.toggle('focus');
    } else {
        label.classList.toggle('font-black');
    }
}

function allNone() {
    console.log(mainBox.children);
    Array.from(mainBox.children).forEach(child => {
        Array.from(child.children).forEach(child2 =>
            child2.classList.add('none'));
        child.classList.add('none');
    });
}

function displayNone(classNm) {
    const element = document.querySelector(`.${classNm}`);

    Array.from(element.children).forEach(child => {
        child.classList.add('none');
    });
}

// 음식 검색
foodName.addEventListener('focus',toggleLabel);
foodName.addEventListener('focusout',toggleLabel);

// 카테고리 이벤트
cateBtn.forEach(btn => btn.addEventListener('mouseenter',toggleActive))
cateBtn.forEach(btn => btn.addEventListener('mouseleave',toggleActive))
cateBtn.forEach(btn => btn.addEventListener('click',activeFix))

// 음식 선택 이벤트
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseenter',toggleActive))
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseleave',toggleActive))

// 별 평가 이벤트
ratingBtn.forEach((rate,i) =>rate.addEventListener('click',() => fixStar(i)))
ratingStar.forEach((rate,i) =>rate.addEventListener('mouseenter',() => colorStar(i)))
ratingStar.forEach((rate,i) =>rate.addEventListener('mouseleave',() => colorStar(-1)))

// 로그인, 회원가입
loginInputs.forEach(input => input.addEventListener('focus',toggleLabel));
loginInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focus',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focusout',toggleLabel));