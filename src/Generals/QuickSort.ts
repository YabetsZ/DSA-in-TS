import fs from "fs";
const quickSort = (
    arr: number[],
    l = 0,
    r = arr.length - 1,
    count = 0
): [number[], number] => {
    if (l < r) {
        count += r - l;
        let sortedIdx = partitionSubroutine(arr, l, r);
        [arr, count] = quickSort(arr, l, sortedIdx - 1, count);
        [arr, count] = quickSort(arr, sortedIdx + 1, r, count);
    }
    return [arr, count];
};

const partitionSubroutine = (arr: number[], l: number, r: number): number => {
    // l: index for the pivot, arr[l]-> leftmost element[pivot]
    // r: index for the end of the partition
    // let pivot = Math.floor(Math.random() * (r - l + 1)) + l;
    // swap(arr, l, pivot);

    // METHOD median of the three
    const m = Math.floor((l + r) / 2);
    if (
        (arr[r] <= arr[m] && arr[r] >= arr[l]) ||
        (arr[r] >= arr[m] && arr[r] <= arr[l])
    ) {
        swap(arr, l, r);
    } else if (
        (arr[m] <= arr[r] && arr[m] >= arr[l]) ||
        (arr[m] >= arr[r] && arr[m] <= arr[l])
    ) {
        swap(arr, l, m);
    }

    // // shuffling it first
    // shuffleArray(arr, l, r);

    // Use the median as the pivot
    // swap(arr, mid, l); // Move pivot to start
    // swap(arr, l, r); // for the second problem
    let i = l + 1;
    // let i = l;
    for (let j = l + 1; j <= r; j++) {
        // for (let j = l; j < r; j++) {
        if (arr[j] < arr[l]) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i - 1, l);
    // swap(arr, i, r);
    // return i;
    return i - 1;
};

const swap = (arr: number[], p: number, r: number): void => {
    let temp = arr[p];
    arr[p] = arr[r];
    arr[r] = temp;
};

// Shuffle in Knuth's shuffle
function shuffleArray(array: number[], l: number, r: number) {
    for (let i = r; i >= l; i--) {
        const j = Math.floor(Math.random() * (i - l + 1)) + l;
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const strNum = fs.readFileSync("./src/quickTest.txt");
const arr = strNum
    .toString()
    .split("\n")
    .map((num) => +num.trim());

console.log(quickSort(arr));
