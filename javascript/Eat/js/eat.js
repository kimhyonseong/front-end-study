import jsonData from './food.json' assert {type:"json"};
import * as json from "./jsonParse";
const foodData = jsonData;

// 초기 셋팅
const foodList = document.querySelector('.food-list');
foodList.innerHTML = json.showFood(foodData);
const foodInfo = document.querySelector(".food-info");

// 객체 선언
const mainBox = document.querySelector('main');
const foodName = document.getElementById("food");
let foodNum = parseInt(window.localStorage.getItem("currentFood")) || 0;  // 현재 음식 인덱스

const cate = document.querySelector('.category');
const cateBtn = cate.querySelectorAll('label');

const loginBox = document.querySelectorAll('.login');
const loginInputs = loginBox.item(0).querySelectorAll('input');
const regiInputs = loginBox.item(1).querySelectorAll('input');
const loginBt = loginBox.item(0).querySelectorAll('.buttons>input');
const loginForm = document.querySelector('form[class="loginForm"]');
const registerForm = document.querySelector('form[class="registerForm"]');

//클래스까지 스크롤
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

function removeActive() {
    Array.from(this).forEach(ele => {
        ele.classList.remove('active');
    })
}

function activeFix(index) {
    cateBtn.forEach((btn, i) => {
        btn.classList.remove('a-fix');
        btn.classList.remove('active');

        if (i === index) {
            btn.classList.add('a-fix');
            btn.classList.add('active');
        }
    })
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
            // 현재 음식 인덱스 번호 지정
            foodNum = 1;
            window.localStorage.setItem("currentFood",`${foodNum}`);
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

        if (!valueEmpty(userId) || !valueEmpty(password)) {
            alert("빈칸을 확인해주세요.");
            return false;
        }

        if (window.localStorage.getItem('id')) {
            const userDataId = window.localStorage.getItem('id').split(',');
            const userDataPw = window.localStorage.getItem('password').split(',');
            const userDataNm = window.localStorage.getItem('name').split(',');

            let test = userDataId.indexOf(userId);
            console.log(test);

            if (userDataPw[test] === password) {
                setCookie('id', userDataId[test]);
                setCookie('name', userDataNm[test]);
                alert('로그인 완료.');

                // 내가 전에 평가하던 페이지로 가기
                location.reload();
            } else {
                alert('아이디와 비밀번호가 일치하지 않습니다.');
                return false;
            }
        } else {
            alert("가입되지 않은 회원입니다.");
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
            if (userIds.split(',').includes(obj.userId)) {
                alert('이미 사용 중인 아이디입니다.');
                return false;
            }
            all.id = ','+userIds;
            all.password = ','+window.localStorage.getItem('password');
            all.name = ','+window.localStorage.getItem('name');
        }

        window.localStorage.setItem('id', `${obj.userId}${all.id}`);
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
cateBtn.forEach((btn,index) =>
    btn.addEventListener('click',()=>activeFix(index)))
activeFix(foodNum);

// 음식 선택 이벤트
function foodClickEvent(e) {
    if (e.target.classList.contains("food-name") && e.type === "click") {
        const index = Array.from(document.querySelectorAll(".food-name")).findIndex((ele) => ele===e.target);

        foodInfo.innerHTML = json.foodTemplate(foodData[index]);
        removeActive.call(document.querySelectorAll(".food-name"));
        displayShow('food-info');
        scrollClass('food-info');
    }
}

let prevFoodList = foodList;
function foodMousemoveEvent(e) {
    //enter
    if(e.target.classList.contains("food-name") && !prevFoodList.classList.contains("food-name")) {
        toggleActive.call(e.target);
    }

    //leave
    else if (!e.target.classList.contains("food-name") && prevFoodList.classList.contains("food-name")) {
        toggleActive.call(prevFoodList);
    }

    else if(!e.target.classList.contains("food-name") && !prevFoodList.classList.contains("food-name")) {
        removeActive.call(document.querySelectorAll(".food-name"));
    }
    prevFoodList = e.target;
}
foodList.addEventListener("click", foodClickEvent);
foodList.addEventListener("mousemove", foodMousemoveEvent);


// 별 평가 이벤트
let prevFoodInfo = "NONE";
function starMousemoveEvent(e) {
    // leave
    if (prevFoodInfo.toLowerCase() === "label" && e.target.nodeName.toLowerCase() !== "label") {
        const star = document.querySelectorAll(".star");
        colorStar.call(window,star,-1);
    }

    // enter
    if (e.target.nodeName.toLowerCase() === "label" && e.type === "mousemove") {
        const star = document.querySelectorAll(".star");
        let index = Array.from(star).findIndex((ele) => ele===e.toElement.parentElement);
        colorStar.call(window,star,index);
    }
    prevFoodInfo = e.target.nodeName;
}

function starClickEvent(e) {
    if (e.target.name === "star" && e.type === "click") {
        const star = document.querySelectorAll("input[name='star']");
        let index = Array.from(star).findIndex((ele) => ele===e.target);
        fixStar(star,index);
    }
}
foodInfo.addEventListener("click",starClickEvent);
foodInfo.addEventListener("mousemove",starMousemoveEvent);

// 로그인
loginInputs.forEach(input => input.addEventListener('focus',toggleLabel));
loginInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
loginInputs.forEach(input =>
    input.addEventListener('keypress',(e) => {
        if (e.code.toLowerCase() === "space") {
            e.preventDefault();
        }
    }));
loginBt.forEach(bt => bt.addEventListener('click', loginAction))

// 회원가입
function valueEmpty(value) {
    // 비었으면 false
    return value.trim() !== "";
}
function rexExp(value) {
    // 특수문자 포함시 true
    let specialStr = new RegExp(/[`~!@#$%^&*\[\]|'"()\-_+=,.\/\\?><]/,"gi");
    return specialStr.test(value);
}
function validationUser(userInfo) {
    // 유효성 검사 - 모두 통과시 true
    if (typeof userInfo !== "object") {
        alert('유효한 값이 아닙니다.');
        return false;
    }
    if (rexExp(userInfo.userId) || rexExp(userInfo.name)) {
        alert("아이디와 이름에는 특수문자 사용이 불가 합니다.");
        return false;
    }
    if (!valueEmpty(userInfo.userId) || !valueEmpty(userInfo.name)) {
        alert('빈칸을 확인해주세요.');
        return false;
    }
}
regiInputs.forEach(input => input.addEventListener('focus',toggleLabel));
regiInputs.forEach(input => input.addEventListener('focusout',toggleLabel));
regiInputs.forEach(input =>
    input.addEventListener('keypress',(e) => {
        if (e.code.toLowerCase() === "space") {
            e.preventDefault();
        }
    }));
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const user = {
        userId : registerForm.querySelector('input[name="user_id"]').value.trim(),
        password : registerForm.querySelector('input[name="user_pw"]').value.trim(),
        name : registerForm.querySelector('input[name="user_name"]').value.trim()
    }

    if(validationUser(user)) {
        return false;
    }

    if(localSave(user)) {
        alert('가입이 완료되었습니다.');
        allNone();
        displayShow('login');
    }
})

registerForm.querySelector('input[data-value="goLogin"]')
    .addEventListener('click',login);