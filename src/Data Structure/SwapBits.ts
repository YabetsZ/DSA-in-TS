// METHOD: BIT MANIPULATION
// TITLE: SWAP THE ith and jth bit of a number
const swap = (
  x: number,
  i: number,
  j: number
): [number, number, string] | undefined => {
  if (x.toString(2).length < i || x.toString(2).length < j) return;
  (i -= 1), (j -= 1);
  if (((x >>> i) & 1) !== ((x >>> j) & 1)) {
    let flippingWord = (1 << i) | (1 << j);
    return [x, x ^ flippingWord, flippingWord.toString(2)];
  }
};

console.log(swap(20, 2, 3));
console.log((1 << 3).toString(2));
console.log((10n >> 1n).toString(2));
