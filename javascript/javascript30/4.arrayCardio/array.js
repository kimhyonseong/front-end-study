const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born1500 = inventors.filter(x => x.year >= 1500 && x.year <= 1600);
console.table(born1500);
born1500.forEach(x=>console.log(x.first+' '+x.last))

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullName = inventors.map(x=>`${x.first} ${x.last}`);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortP = inventors.sort((a,b)=>a.year - b.year);
console.log(sortP);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
/* reduce는 forEach처럼 4개의 인수를 받을 수 있음
누산기 - 값을 다 더해버림
ex - forEach(function(element,index,array))
ex - reduce(function(sum,currentValue,currentIndex,array),0) - 마지막 0은 초기값 설정
1번째 인수 sum은 배열값들의 합
2번째 인수 currentValue는 현재 배열의 값
3번째 인수 currentIndex는 현재 배열의 키
4번째 인수 array는 대상 배열
맨 마지막 0은 초기값이며 배열의 첫번째 값을 대체함? 없으면 첫번째 요소 사용
 */
const lives = inventors.reduce((sum,a) => {
    return sum + (a.passed-a.year)
},0)
console.log(lives);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a,b) => {
    return -(a.passed - a.year) + (b.passed - b.year);
})
console.log(oldest[0]);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(link => link.textContent)
//     .filter(x=>x.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSort = people.sort(function (a,b) {
    // console.log(a.split(', ')[1][0]);
    // console.log(b.split(', ')[1][0]);
    // return a.split(', ')[0] > b.split(', ')[0] ? 1 : -1;

    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');

    return aLast > bLast ? 1 : -1;
})
console.log(peopleSort);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const trans = data.reduce(function (obj,item) {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
},{})
console.log(trans);