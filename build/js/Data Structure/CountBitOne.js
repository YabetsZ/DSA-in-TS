"use strict";
const countBitOne = (x) => {
    let count = 0;
    while (x !== 0) {
        count += x & 1;
        x >>>= 1;
    }
    return count;
};
console.log(countBitOne(1023));
