const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated %s를 이용해서 문자열 삽입
console.log('hello I am a %s','※');

// Styled %c를 이용해서 css 입히기
console.log('%c hello I am a %s','font-size:50px; background:red;','※');

// warning!
console.warn('warning?');

// Error :|
console.error('error~!');

// Info
console.info('%c hello I am a %s','font-size:50px; background:red;','※');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('error'), 'that is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog =>{
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Mon');
console.count('Mon');
console.count('Mon');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
})