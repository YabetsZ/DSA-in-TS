// METHOD: Frequency counter
const SameArraySquared = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const freqArr1: { [idx: number]: number } = {};
    const freqArr2: { [idx: number]: number } = {};

    for (let num of arr1) {
        freqArr1[num] ? freqArr1[num]++ : (freqArr1[num] = 1);
    }
    for (let num of arr2) {
        freqArr2[num] ? freqArr2[num]++ : (freqArr2[num] = 1);
    }
    console.log(freqArr1, freqArr2);

    for (let key in freqArr1) {
        if (!freqArr2[Number(key) ** 2]) return false;
        if (freqArr1[key] !== freqArr2[Number(key) ** 2]) return false;
    }
    return true;
};

console.log(SameArraySquared([1, 2, 3, 1, 3, 4], [1, 1, 4, 9, 16, 9]));
