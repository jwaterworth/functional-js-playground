let count = require('./arrays/conditionalCount');
let equals = require('./operations/equals');

module.exports = (array) => {
    return count(equals(0), array);
};
