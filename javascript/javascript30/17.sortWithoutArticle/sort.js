const bands = ['The Plot in You', 'The Devil Wears Prada',
    'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts',
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    // 정규식에서 |는 or라는 뜻
    return bandName.replace(/^(a |the |an)/i,'').trim();
}

const sortBand = bands.sort((a,b) =>
    strip(a) > strip(b) ? 1:-1
    // if(a > b) {
    //     return 1;
    // } else {
    //     return -1;
    // }
)

// innerHTML은 map과 join을 이용
document.querySelector('#bands').innerHTML =
    sortBand.map(band => `<li>${band}</li>`).join('');

console.log(sortBand);