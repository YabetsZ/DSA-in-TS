// RSelect === Randomizec selection algorithm
// Input: array A of n $ 1 distinct numbers, and an
// integer i 2 {1, 2, . . . , n}.
// Output: the ith order statistic of A.

// if n = 1 then // base case
//      return A[1]
// choose pivot element p uniformly at random from A
// partition A around p
// j := p’s position in partitioned array
// if j = i then // you got lucky!
//      return p
// else if j > i then
//      return RSelect(first part of A, i)
// else // j < i
//      return RSelect(second part of A, i - j)

// z is the zth smallest element of an array given. z = 1, 2, 3, ...
import fs from "fs";

const RSelect = (
    arr: number[],
    z: number,
    l = 0,
    r = arr.length - 1
): number => {
    if (l === r) return arr[l]; // Base case: only one element

    const pivotIdx = partitionSubroutine(arr, l, r);
    const pivotPos = pivotIdx - l + 1; // Position of pivot in the current subarray

    if (pivotPos === z) return arr[pivotIdx];
    else if (pivotPos < z)
        // Search in the right half
        return RSelect(arr, z - pivotPos, pivotIdx + 1, r);
    // Search in the left half
    else return RSelect(arr, z, l, pivotIdx - 1);
};

const partitionSubroutine = (arr: number[], l: number, r: number): number => {
    const pivot = Math.floor(Math.random() * (r - l + 1)) + l;
    [arr[l], arr[pivot]] = [arr[pivot], arr[l]]; // Swap with the first element
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        if (arr[j] < arr[l]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            i++;
        }
    }
    [arr[l], arr[i - 1]] = [arr[i - 1], arr[l]]; // Final swap
    return i - 1; // Return the index of the pivot
};

// Read numbers from file
const strNum = fs.readFileSync("./src/quickTest.txt");
const arr = strNum
    .toString()
    .split("\n")
    .map((num) => +num.trim())
    .filter((num) => !isNaN(num)); // Filter out any non-numeric entries

const z = 1002; // Change this as needed
if (z > 0 && z <= arr.length) {
    console.log(RSelect(arr, z));
} else {
    console.error(
        "Invalid value for z. It must be between 1 and the length of the array."
    );
}
