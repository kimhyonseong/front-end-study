import jsonData from './food.json' assert {type:"json"};
import * as json from "./jsonParse";
import {foodTemplate} from "./jsonParse";
const foodData = jsonData;

// 초기 셋팅
document.querySelector('.food-list').innerHTML = json.showFood(foodData);
const foodList = document.querySelector('.food-list');
const foodInfo = document.querySelector(".food-info");

// 객체 선언
const mainBox = document.querySelector('main');

const foodName = document.getElementById("food");

const cate = document.querySelector('.category');
const cateBtn = cate.querySelectorAll('label');
const foods = document.querySelectorAll('.food');

const loginBox = document.querySelectorAll('.login');
const loginInputs = loginBox.item(0).querySelectorAll('input');
const regiInputs = loginBox.item(1).querySelectorAll('input');
const loginBt = loginBox.item(0).querySelectorAll('.buttons>input');
const loginForm = document.querySelector('form[class="loginForm"]');
const registerForm = document.querySelector('form[class="registerForm"]');

//클레스까지 스크롤
function scrollClass(clasNm) {
    const element = document.querySelector(`.${clasNm}`);
    window.scroll({
        top : element.offsetTop,
        behavior: 'smooth'
    })
}

// 클래스 토클
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

function colorStar(stars,num = 0) {
    for (let i =0; i< 5; i++) {
        if (i <= num) {
            stars.item(i).classList.add('yellow');
        } else {
            stars.item(i).classList.remove('yellow');
        }
    }

    if (this.event.type === 'mouseleave') {
        for (let i =0; i< 5; i++) {
            if (stars.item(i).classList.contains('fixedStar')) {
                stars.item(i).classList.add('yellow');
            }
        }
    }
}

function fixStar(stars,num = 0) {
    // 로그인 이동
    if (getCookie('id') === null) {
        if (confirm('로그인이 필요합니다. 로그인하시겠습니까?')) {
            login();
            scrollClass('background');
        }
        return false;
    }

    for (let i =0; i< 5; i++) {
        if (i <= num) {
            stars.item(i).classList.add('fixedStar');
        } else {
            stars.item(i).classList.remove('fixedStar');
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

        if (userDataPw[test] === password) {
            setCookie('id',userDataId[test]);
            setCookie('name',userDataNm[test]);
            alert('로그인 완료.');

            // 내가 전에 평가하던 페이지로 가기
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
    const userIds = window.localStorage.getItem('id');
    let all = {
        id:'',
        password:'',
        name: ''
    }
    if (typeof obj === 'object') {
        if (userIds) {
            if (userIds.split(',').includes(obj.id)) {
                alert('이미 사용 중인 아이디입니다.');
                return false;
            }
            all.id = ','+userIds;
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
function foodEventHandler(e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.classList.contains("food-name") && e.type === "click") {
        let index = Array.from(document.querySelectorAll(".food-name")).findIndex((ele) => ele===e.target);
        document.querySelector(".food-info").innerHTML = json.foodTemplate(foodData[index]);
        displayShow('food-info');
        scrollClass('food-info');
    } 
    // else if(e.target.classList.contains("food-name")) {
    //     console.log(e);
    //     console.log("enter");
    //     toggleActive.call(e.target);
    // }
}
foodList.addEventListener("click", foodEventHandler);
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseenter',toggleActive))
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseleave',toggleActive))

// 별 평가 이벤트
let prevFoodInfo = "NONE";
function foodInfoEventHandler(e) {
    // console.log(e.type);
    // console.log(e.target.nodeName);

    if (e.target.name === "star" && e.type === "click") {
        const star = document.querySelectorAll("input[name='star']");
        let index = Array.from(star).findIndex((ele) => ele===e.target);
        fixStar(star,index);
    }

    // leave
    if (prevFoodInfo.toLowerCase() === "label" && e.target.nodeName.toLowerCase() !== "label") {
        const star = document.querySelectorAll(".star");
        colorStar.call(window,star,-1);
    }

    if (e.target.nodeName.toLowerCase() === "label" && e.type === "mousemove") {
        console.log(e.toElement.parentElement);
        const star = document.querySelectorAll(".star");
        let index = Array.from(star).findIndex((ele) => ele===e.toElement.parentElement);
        colorStar.call(window,star,index);
    }
    prevFoodInfo = e.target.nodeName;
}
foodInfo.addEventListener("click",foodInfoEventHandler);
foodInfo.addEventListener("mousemove",foodInfoEventHandler);

// 로그인
loginInputs.forEach(input => input.addEventListener('focus',toggleLabel));
loginInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
loginBt.forEach(bt => bt.addEventListener('click', loginAction))

// 회원가입
regiInputs.forEach(input => input.addEventListener('focus',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
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

registerForm.querySelector('input[data-value="goLogin"]')
    .addEventListener('click',login);