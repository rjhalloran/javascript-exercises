const repeatString = function(string, num) {
    outStr = ''
    if(num < 0) {
        return 'ERROR'
    }
    for(i = 1; i <= num; i++) {
        outStr += string
    }
    return outStr
};

// Do not edit below this line
module.exports = repeatString;
