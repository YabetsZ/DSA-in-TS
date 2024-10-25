const mergeSort = (arr: number[]): number[] => {
  // handle the base-case
  if (arr.length === 1) {
    return arr;
  }
  // [4, 3, 2, 2, 5, 6]

  const mid = Math.floor(arr.length / 2);

  // recursively call mergeSort
  const sortedLeft = mergeSort(arr.slice(0, mid)); // left = arr.slice(0, mid);
  const sortedRight = mergeSort(arr.slice(mid)); // const right = arr.slice(mid);
  return merge(sortedLeft, sortedRight);
};

const merge = (left: number[], right: number[]): number[] => {
  let merged: number[] = [];
  let i = 0,
    k = 0;

  while (i < left.length && k < right.length) {
    if (left[i] <= right[k]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[k]);
      k++;
    }
  }
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (k < right.length) {
    merged.push(right[k]);
    k++;
  }
  //   return merged.concat(left.slice(i)).concat(right.slice(k));
  return merged;
};

console.log(mergeSort([4, 3, 2, 2, 5, 6]));
