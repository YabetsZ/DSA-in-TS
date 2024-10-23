// METHOD: Frequency counter
const IsAnagram = (str: string, rst: string): boolean => {
    let str1 = str.toLowerCase().split(""),
        str2 = rst.toLowerCase().split("");
    if (str1.length !== str2.length) {
        return false;
    }
    const freqstr1: { [idx: string]: number } = {};
    const freqstr2: { [idx: string]: number } = {};

    for (let letter of str1) {
        freqstr1[letter] ? freqstr1[letter]++ : (freqstr1[letter] = 1);
    }
    for (let letter of str2) {
        freqstr2[letter] ? freqstr2[letter]++ : (freqstr2[letter] = 1);
    }
    console.log(freqstr1, freqstr2);

    for (let key in freqstr1) {
        if (!freqstr2[key]) return false;
        if (freqstr1[key] !== freqstr2[key]) return false;
    }
    return true;
};

console.log(IsAnagram("Hello2", "ollehd"));
