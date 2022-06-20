export function showFood(json) {
    return json.map(data => `<div class="food">
            <div class="food-img">
                <img src="${data.img}" alt="${data.name}">
            </div>
            <div class="food-name">
                ${data.name}
            </div>
        </div>`).join('');
}

function drawMyStar(num) {

}

function drawStar(num) {
    // ★★★★★
    let star = "★";
    let returnValue = "";
    for (let i=0; i<num; i++) {
        returnValue += star;
    }
    return returnValue;
}

function replyStr(comments) {
    return comments.map(comment => `
    <div class="reply">
        <div class="star">${drawStar(comment.star)}</div>
        <span class="text">${comment.comment}</span>
        <div class="user_id">-${comment.id}-</div>
    </div>`).join('');
}

function foodCodeStr(code) {
    switch (code) {
        case 1: return '한식';
        case 2: return '양식';
        case 3: return '중식';
        case 4: return '일식';
    }
}

function foodEvr(comments) {
    let avr = comments.reduce((prev,next) => prev.star + next.star,0);
    console.log(comments.length);
    console.log(avr);
    return 5.0;
}

export function foodTemplate(data) {
    return `<div class="food-img">
            <img src="/javascript/Eat/food/bread.jpg" alt="pizza">
        </div>
        <div class="food-avr">평점 <span class="avr">${foodEvr(data.comment)}</span></div>
        <div class="rating-star">
            <div class="text">내 평가</div>
            <span class="star">
                <label data-value="1">★
                    <input type="radio" name="star" value="1">
                </label>
            </span>
            <span class="star">
                <label data-value="2">★
                    <input type="radio" name="star" value="2">
                </label>
            </span>
            <span class="star">
                <label data-value="3">★
                    <input type="radio" name="star" value="3">
                </label>
            </span>
            <span class="star">
                <label data-value="4">★
                    <input type="radio" name="star" value="4">
                </label>
            </span>
            <span class="star">
                <label data-value="5">★
                    <input type="radio" name="star" value="5">
                </label>
            </span>
        </div>
        <div class="food-name">${data.name}</div>
        <div class="food-cate">${foodCodeStr(data.food_code)}</div>
        <div class="food-reply">${replyStr(data.comment)}</div>`;
}