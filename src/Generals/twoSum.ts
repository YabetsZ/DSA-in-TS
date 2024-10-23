// COMPETITIVE: 
function twoSum(nums: number[], target: number): number[] {
  interface Dictionary {
    [index: number]: number;
  }
  let obj: Dictionary = {};
  let key: number;
  for (let i = 0; i < nums.length; i++) {
    key = nums[i];
    const dif = target - key;
    if (key in obj) {
      return [obj[key], i];
    } else {
      obj = { ...obj, [dif]: i };
    }
  }
  return [];
}
console.log(twoSum([1, 2, 3, 4, 5], 3));

// ALTERNATE
function twoSumA(nums: number[], target: number): number[] {
    const m: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const toFind = target - current;
        const toFindIndx = m.get(toFind);
        if (toFindIndx !== undefined) {
            return [toFindIndx, i];
        } else {
            m.set(nums[i],i);
        }
    }
    return [];
};