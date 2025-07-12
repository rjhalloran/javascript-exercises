const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    let total = 0;
    const small = Math.min(a, b);
    const large = Math.max(a, b);
    
    for (let i = small; i <= large; i ++)  {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
