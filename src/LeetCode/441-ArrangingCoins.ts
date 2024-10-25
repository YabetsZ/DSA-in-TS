// TITLE: ARRANGING COINS
// DESCRIPTION: You have n coins and you want to build a staircase with these coins.
// >            The staircase consists of k rows where the ith row has exactly i coins.
// >            The last row of the staircase may be incomplete.
// >            Given the integer n, return the number of complete rows of the staircase you will build.

// METHOD: PURE MATH
function arrangeCoinsA(n: number): number {
    return Math.floor(-0.5 + Math.sqrt(1 + 8 * n) / 2);
}
// METHOD: BINARY SEARCH
function arrangeCoinsB(n: number): number {
    // n refers to the total number of coins spent to build the stairs: Sn
    let left = 0,
        right = n;
    while (left < right) {
        let mid = Math.floor((left + right) / 2) + 1;
        if (n < (mid / 2) * (mid + 1)) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
}
console.time("A");
console.log(arrangeCoinsA(1200000));
console.timeEnd("A");

console.time("B");
console.log(arrangeCoinsB(1200000));
console.timeEnd("B");
