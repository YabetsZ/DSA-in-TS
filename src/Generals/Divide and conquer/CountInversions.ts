import * as fs from "fs";
const sortAndCountInversions = (arr: number[]): [number[], number] => {
    // basecase
    if (arr.length <= 1) return [arr, 0];
    // divide
    const leftArr = arr.slice(0, Math.floor(arr.length / 2));
    const rightArr = arr.slice(Math.floor(arr.length / 2));
    // conquer
    const [leftSorted, leftInv] = sortAndCountInversions(leftArr);
    const [rightSorted, rightInv] = sortAndCountInversions(rightArr);
    const [merged, splitInv] = mergeAndCount(leftSorted, rightSorted);

    return [merged, leftInv + rightInv + splitInv];
};

const mergeAndCount = (left: number[], right: number[]): [number[], number] => {
    let i = 0,
        j = 0,
        count = 0;
    const mergedArr: number[] = [];
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mergedArr.push(left[i]);
            i++;
        } else {
            mergedArr.push(right[j]);
            count += left.length - i;
            j++;
        }
    }
    while (i < left.length) {
        mergedArr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArr.push(right[j]);
        j++;
    }
    return [mergedArr, count];
};
const string = fs.readFileSync("./src/oneHundredThousand.txt");
const arr = string
    .toString()
    .split("\n")
    .map((num) => +num.trim());
console.log(sortAndCountInversions(arr));
