// METHOD: Bit manipulation
// TITLE: counting number of 1s in a word(string of bits)
const countBitOne = (x: number): number => {
  let count = 0;
  while (x !== 0) {
    // console.log(x.toString(2));
    count += x & 1;
    x >>>= 1;
  }
  return count;
};

console.log(countBitOne(1023));
