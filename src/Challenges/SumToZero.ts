function SumToZero(arr: number[]): number[] | undefined {
    let dict: { [idx: number]: number } = {};
    for (let num of arr) {
        let target = -num;
        if (dict[num]) return [target, num];
        dict[target] = num;
    }
}

console.log(SumToZero([-1, 3, 5, 3, 7]));

// NOTE: if the input array is sorted and want to use two pointers...
// METHOD: Two pointers
function SumToZeroV2(arr: number[]): number[] | undefined {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (-arr[left] === arr[right]) return [arr[left], arr[right]];
        else if (-arr[left] < arr[right]) right--;
        else left++;
    }
}
console.log(SumToZero([-1, 0, 1, 4]));
