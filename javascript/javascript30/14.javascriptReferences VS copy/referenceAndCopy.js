// start with strings, numbers and booleans
// let age = 100;
// let age2 = 100;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
// team[5] = 'Lux';
// console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Lux';
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[0] = 'Eric';
console.log(players, team4);

const team5 = Array.from(players);
team5[0] = 'Son';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;
//
// console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number : 99, age:12});
console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};
cap3.age = 20;
console.log(person, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const kim = {
    name : 'kim',
    age : 100,
    social : {
        twitter : '@kim',
        facebook:'kim.develop'
    }
}
console.clear();
console.log(kim);

const dv = Object.assign({},kim);
dv.name = 'dv1';
dv.social.twitter = '@dv1';
console.log(kim,dv);
const dv2 = JSON.parse(JSON.stringify(kim));
dv2.social.twitter = '@dv2'
console.log(kim,dv2);