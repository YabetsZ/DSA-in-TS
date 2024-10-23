// Problem 3.4 (Difficult.) You are given an n-by-n grid of distinct
// numbers. A number is a local minimum if it is smaller than all
// its neighbors. (A neighbor of a number is one immediately above,
// below, to the left, or to the right. Most numbers have four neighbors;
// numbers on the side have three; the four corners have two.) Use the
// divide-and-conquer algorithm design paradigm to compute a local
// minimum with only O(n) comparisons between pairs of numbers.
// (Note: since there are n**2 numbers in the input, you cannot afford to
// look at all of them.)
// [Hint: Figure out how to recurse on an n/2 -by- n2/ grid after doing only
// O(n) work.]
type Cell = {
    value: number;
    row: number;
    col: number;
};

const localMinimum = (arr: number[][], row = 0, col = 0): Cell => {
    // Basecase
    if (arr.length === 1) return { value: arr[0][0], row: row, col: col };

    const colNum = Math.floor(arr[0].length / 2);
    const rowNum = Math.floor(arr.length / 2);
    const min = { value: Infinity, row: -1, col: -1 };

    for (let i = 0; i < colNum; i++) {
        if (arr[i][colNum] < min.value) {
            min.value = arr[i][colNum];
            min.row = i;
            min.col = colNum;
        }
        if (arr[rowNum][i] < min.value) {
            min.value = arr[rowNum][i];
            min.row = rowNum;
            min.col = i;
        }
    }

    // if the local minimum is found on the mid col or/and row
    // check order Top, Right, Bottom and Left
    if (
        (min.row === 0 || min.value < arr[min.row - 1][min.col]) &&
        (min.col === arr[0].length - 1 ||
            min.value < arr[min.row][min.col + 1]) &&
        (min.row === arr.length - 1 || min.value < arr[min.row - 1][min.col]) &&
        (min.col === 0 || min.value < arr[min.row][min.col - 1])
    )
        return min;

    // now checking recursively the chosen sub-matrix
    if (min.row < rowNum) {
        if (min.value > arr[min.row][min.col + 1]) {
            return localMinimum(
                arr.slice(0, rowNum).map((row) => row.slice(colNum + 1)),
                row,
                colNum + 1
            );
        } else {
            return localMinimum(
                arr.slice(0, rowNum).map((row) => row.slice(0, colNum)),
                row,
                col
            );
        }
    } else if (min.row > rowNum) {
        if (min.value > arr[min.row][min.col + 1]) {
            return localMinimum(
                arr.slice(rowNum + 1).map((row) => row.slice(colNum + 1)),
                rowNum + 1,
                colNum + 1
            );
        } else {
            return localMinimum(
                arr.slice(rowNum + 1).map((row) => row.slice(0, colNum)),
                rowNum + 1,
                col
            );
        }
    } else {
        if (min.col < colNum) {
            if (min.value > arr[min.row + 1][min.col]) {
                return localMinimum(
                    arr.slice(rowNum + 1).map((row) => row.slice(0, colNum)),
                    rowNum + 1,
                    col
                );
            } else
                return localMinimum(
                    arr.slice(0, rowNum).map((row) => row.slice(0, colNum)),
                    row,
                    col
                );
        } else {
            if (min.value > arr[min.row - 1][min.col]) {
                return localMinimum(
                    arr.slice(rowNum + 1).map((row) => row.slice(colNum + 1))
                );
            } else
                return localMinimum(
                    arr.slice(0, rowNum).map((row) => row.slice(colNum + 1)),
                    row,
                    colNum + 1
                );
        }
    }
};

/* the following code works well
type Cell = {
    value: number;
    row: number;
    col: number;
};

const localMinimum = (arr: number[][], row = 0, col = 0): Cell => {
    // Base case
    if (arr.length === 1 && arr[0].length === 1) return { value: arr[0][0], row: row, col: col };

    const colNum = Math.floor(arr[0].length / 2);
    const rowNum = Math.floor(arr.length / 2);
    const min = { value: Infinity, row: -1, col: -1 };

    // Find the minimum in the middle row and column
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][colNum] < min.value) {
            min.value = arr[i][colNum];
            min.row = i;
            min.col = colNum;
        }
    }
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[rowNum][j] < min.value) {
            min.value = arr[rowNum][j];
            min.row = rowNum;
            min.col = j;
        }
    }

    // Check if the found minimum is a local minimum
    if ((min.row === 0 || arr[min.row][min.col] < arr[min.row - 1][min.col]) &&
        (min.row === arr.length - 1 || arr[min.row][min.col] < arr[min.row + 1][min.col]) &&
        (min.col === 0 || arr[min.row][min.col] < arr[min.row][min.col - 1]) &&
        (min.col === arr[0].length - 1 || arr[min.row][min.col] < arr[min.row][min.col + 1])) {
        return min;
    }

    // Recur in the appropriate sub-array
    if (min.row > rowNum) {
        if (min.col > colNum) {
            return localMinimum(arr.slice(rowNum + 1).map(row => row.slice(colNum + 1)), row + rowNum + 1, col + colNum + 1);
        } else {
            return localMinimum(arr.slice(rowNum + 1).map(row => row.slice(0, colNum)), row + rowNum + 1, col);
        }
    } else {
        if (min.col > colNum) {
            return localMinimum(arr.slice(0, rowNum).map(row => row.slice(colNum + 1)), row, col + colNum + 1);
        } else {
            return localMinimum(arr.slice(0, rowNum).map(row => row.slice(0, colNum)), row, col);
        }
    }
};
*/
