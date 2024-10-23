// COMPETITIVE: find the highest sum of three contiguous numbers in the following array.
//      METHOD: The hard way — Brute Force
const sol1 : (input: number[]) => number = input => {
    let maximum = -Infinity;
    for(let i = 0; i<= input.length-3; i++) {
        let tot = 0
        for(let j = i; j <= i + 2; j++) {
            tot += input[j];
        }
        maximum = Math.max(maximum, tot);
    }
    return maximum;
}
console.log('result from solution 1: ', sol1([1,2,65,7,2,3,45,7,8,5,34,9]));

//      METHOD: Fixed sliding window technique
const sol2 : (input: number[]) => number = input => {
    // let total = input.slice(0, 4)
    //                  .reduce((previous, current) => previous + current);
    let total = input[0] + input[1] + input[2];
    let maximum = total;
    for(let i = 1; i<= input.length-3; i++) {
        total = total - input[i - 1] + input[i + 2];
        maximum = Math.max(maximum, total);
    }
    return maximum
}
console.log('result from solution 2: ', sol2([1,2,65,7,2,3,45,7,8,5,34,9]));

// COMPETITIVE: what is the smallest difference in indices between two repeat values in an array?
//      METHOD: Brute force
const array: (number[] | number)[] = [[1,2,3], 3];
console.log("this is the array: ", array);
const map = new Map([[1, "one"], [2, "two"]]);
const reverse = [...map].reduce((acc,[key, value]) => {
	acc.set(value, key);
	return acc
}, new Map());
const obj = { 1: 'one', 2: 'two'};
const objReverse = Object.entries(obj);
console.log(objReverse);

//      METHOD: Variable window technique


