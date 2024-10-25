function search(
    nums: number[],
    target: number,
    left = 0,
    right = nums.length - 1
): number {
    if (left === right && nums[left] !== target) return -1;
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
        return search(nums, target, mid + 1, right);
    } else if (nums[mid] > target) {
        return search(nums, target, left, mid - 1);
    } else return mid;
}

console.log(search([-1, 0, 3, 5, 9, 12], -2));
