"use strict";
const ChangeTo32 = (a) => {
    const result = a >= 0
        ? a.toString(2).padStart(32, "0")
        : (-a - 1)
            .toString(2)
            .split("")
            .map((bit) => (bit === "0" ? "1" : "0"))
            .join("")
            .padStart(32, "1");
    return result;
};
console.log(ChangeTo32(105));
