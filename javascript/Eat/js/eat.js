
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
const loginBt = loginBox.item(0).querySelectorAll('.buttons>input');
const loginForm = document.querySelector('form[class="loginForm"]');
const registerForm = document.querySelector('form[class="registerForm"]');

function scrollClass(clasNm) {
    const element = document.querySelector(`.${clasNm}`);
    window.scroll({
        top : element.offsetTop,
        behavior: 'smooth'
    })
}

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
        if (confirm('로그인이 필요합니다. 로그인하시겠습니까?')) {
            login();
            scrollClass('background');
        }
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

function login() {
    allNone();
    displayShow('login');
}

function loginAction(e) {
    if (this.dataset.value === 'login') {
        e.preventDefault();

        const userId = loginForm.querySelector('input[name="user_id"]').value;
        const password = loginForm.querySelector('input[name="user_pw"]').value;

        const userDataId = window.localStorage.getItem('id').split(',');
        const userDataPw = window.localStorage.getItem('password').split(',');
        const userDataNm = window.localStorage.getItem('name').split(',');

        let test = userDataId.indexOf(userId);

        if (test && userDataPw[test] === password) {
            setCookie('id',userDataId[test]);
            setCookie('name',userDataNm[test]);
            alert('로그인 완료.');

            // 내가 전에 평가하던 페이지로 가기기
           location.reload();
        } else {
            alert('아이디와 비밀번호가 일치하지 않습니다.');
            return false;
        }
    } else {
        register();
    }
}

function register() {
    allNone();
    displayShow('register');
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

function localSave(obj) {
    console.log(obj);
    const userIds = window.localStorage.getItem('id').split(',');
    let all = {
        id:'',
        password:'',
        name: ''
    }
    if (typeof obj === 'object') {
        if (window.localStorage.getItem('id')) {
            if (userIds.includes(obj.id)) {
                alert('이미 사용 중인 아이디입니다.');
                return false;
            }
            all.id = ','+window.localStorage.getItem('id');
            all.password = ','+window.localStorage.getItem('password');
            all.name = ','+window.localStorage.getItem('name');
        }

        window.localStorage.setItem('id', `${obj.id}${all.id}`);
        window.localStorage.setItem('password', `${obj.password}${all.password}`);
        window.localStorage.setItem('name', `${obj.name}${all.name}`);
    } else {
        alert('잘못된 요청입니다.');
        return false;
    }
    return true;
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
    Array.from(mainBox.children).forEach(child => {
        child.classList.add('none');
    });
}

function displayNone(classNm) {
    const element = document.querySelectorAll(`.${classNm}`);

    Array.from(element).forEach(ele => {
        ele.classList.add('none');
    });
}

function displayShow(classNm) {
    const element = document.querySelector(`.${classNm}`);
    element.classList.remove('none');
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
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('click', () => {
        displayShow('food-rating');
        scrollClass('food-rating');
    }))

// 별 평가 이벤트
ratingBtn.forEach((rate,i) =>rate.addEventListener('click',() => fixStar(i)))
ratingStar.forEach((rate,i) =>rate.addEventListener('mouseenter',() => colorStar(i)))
ratingStar.forEach((rate,i) =>rate.addEventListener('mouseleave',() => colorStar(-1)))

// 로그인, 회원가입
loginInputs.forEach(input => input.addEventListener('focus',toggleLabel));
loginInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focus',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
loginBt.forEach(bt => bt.addEventListener('click', loginAction))

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userId = registerForm.querySelector('input[name="user_id"]');
    const password = registerForm.querySelector('input[name="user_pw"]');
    const name = registerForm.querySelector('input[name="user_name"]');

    if (userId.value.trim() === '' ||
        password.value.trim() === '' ||
        name.value.trim() === ''
    ) {
        alert('빈칸을 확인해주세요');
        return false;
    }

    const obj = {
        id : userId.value.trim(),
        password : password.value.trim(),
        name : name.value.trim()
    }
    if(localSave(obj)) {
        alert('가입이 완료되었습니다.');
        allNone();
        displayShow('login');
    }
})