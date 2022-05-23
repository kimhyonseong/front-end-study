const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(blob=>blob.json())
.then(data=>cities.push(...data))
// ... = 전개 구문 : 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 또는 요소로 확장

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="h1">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>`
    }).join('');
    suggestion.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestion');

searchInput.addEventListener('change',displayMatches)
searchInput.addEventListener('keyup',displayMatches)