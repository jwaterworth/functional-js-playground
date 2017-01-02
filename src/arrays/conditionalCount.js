let reduce = require('./reduce');

module.exports = (test, array) => {
    return reduce((base, element) => {
        return !!test(element) ? base + 1 : base;
    }, 0, array);
};
