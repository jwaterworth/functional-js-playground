let foreach = require('./foreach');

module.exports = (combine, base, array) => {
    foreach(array, (element) => {
        base = combine(base, element);
    });

    return base;
};
