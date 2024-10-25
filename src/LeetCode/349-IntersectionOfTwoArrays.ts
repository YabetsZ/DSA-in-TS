// TITLE: 349 Intersection of two arrays
// DESCRIPTION: Given two integer arrays nums1 and nums2, return an array of their intersection.
// >            Each element in the result must be unique and you may return the result in any order.

// METHOD: USAGE OF SETS
function intersectionA(nums1: number[], nums2: number[]): number[] {
    let first = new Set(nums1);
    return [...new Set(nums2)].filter((val) => first.has(val));
}
console.time("A");
console.log(intersectionA([1, 2, 2, 1], [2, 2]));
console.timeEnd("A");

// METHOD: USAGE OF RECORDS
// >Constraints:    1 <= nums1.length, nums2.length <= 1000
// >                  0 <= nums1[i], nums2[i] <= 1000
function intersectionB(nums1: number[], nums2: number[]): number[] {
    let record: boolean[] = new Array(1001).fill(false);
    for (const num of nums1) {
        record[num] = true;
    }
    let result: number[] = [];
    for (const num of nums2) {
        if (record[num]) {
            result.push(num);
            record[num] = false;
        }
    }
    return result;
}
console.time("B");
console.log(intersectionB([1, 2, 2, 1], [2, 2]));
console.timeEnd("B");
console.log(~~3.44, ~~-3.4, ~~3.6);

// METHOD: BINARY SEARCH
// - Sort one of the arrays: This step allows you to use binary search on that array.
// - Iterate through the other array: For each element, use binary search to check if it exists in the sorted array.
// - Store the results: Keep track of the elements found in the intersection.
