"use strict";
const countBitOne = (x) => {
    let count = 0;
    while (x !== 0) {
        count += x & 1;
        x >>>= 1;
    }
    return count;
};
let a = -102;
console.log(countBitOne(1023));
console.log(-a.toString(2));
console.log(a >= 0
    ? a.toString(2).padStart(32, "0")
    : (-a - 1)
        .toString(2)
        .split("")
        .map((bit) => (bit === "0" ? "1" : "0"))
        .join("")
        .padStart(32, "1"));
