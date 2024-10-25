// TITLE: 278. First Bad Version
// DESCRIPTION: You are a product manager and currently leading a team to develop a new product.
// >            Unfortunately, the latest version of your product fails the quality check.
// >            Since each version is developed based on the previous version, all the versions
// >            after a bad version are also bad.
// >            Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// >            which causes all the following ones to be bad.
// >            You are given an API bool isBadVersion(version) which returns whether version is bad.
// >            Implement a function to find the first bad version. You should minimize the number of calls to the API.

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const versionGen = (mid: number): boolean[] => {
    const arr: boolean[] = [
        ...new Array(mid).fill(false),
        ...new Array(1000 - mid).fill(true),
    ];
    return arr;
};
const arr = versionGen(140);
const isBadVersion = (n: number): boolean => {
    return arr[n];
};

// METHOD: BINARY SEARCH
const solution = function (someFunc: typeof isBadVersion) {
    return (n: number): number => {
        let left = 1,
            right = n;
        while (left < right) {
            let mid = ~~((left + right) / 2);
            if (isBadVersion(mid)) {
                // console.log(right);
                right = mid;
            } else {
                left = mid + 1;
                // console.log(left);
            }
        }
        return left;
    };
};

console.log(solution(isBadVersion)(1000));
