let countZeroes = require('./countZeroes');
let map = require('./arrays/map');
let reduce = require('./arrays/reduce');
let partial = require('./functions/partial');

let zeroes = [0, 1, 0, 0, 0, 2, 0, 0, 3];
console.log('Count Zeroes ' + countZeroes(zeroes));

console.log('Map zeroes to 99', map((element) => {
    return element === 0 ? 99 : element;
}, zeroes));

let partialFunc = partial((...args) => reduce((base, element) => base + element, 0, args), 1, 2, 3);
console.log('Partial function result: ', partialFunc(4, 5, 6))
