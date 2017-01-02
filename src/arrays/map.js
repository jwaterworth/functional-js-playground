let foreach = require('./foreach');

module.exports = (func, array) => {
    let results = [];

    foreach(array, (element) => {
        results.push(func(element));
    });

    return results;
};
