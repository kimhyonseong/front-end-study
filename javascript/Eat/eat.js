const cate = document.querySelector('.category');
const cateBtn = cate.querySelectorAll('label');
const foods = document.querySelectorAll('.food');

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

cateBtn.forEach(btn => btn.addEventListener('mouseenter',toggleActive))
cateBtn.forEach(btn => btn.addEventListener('mouseleave',toggleActive))
cateBtn.forEach(btn => btn.addEventListener('click',activeFix))

foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseenter',toggleActive))
foods.forEach(food =>
    food.querySelector('.food-name').addEventListener('mouseleave',toggleActive))