module.exports = (func, ...fixedArgs) => {
    return (...newArgs) => {
        return func.apply(null, fixedArgs.concat(newArgs));
    };
}
