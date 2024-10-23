// METHOD: Bit manipulation
// TITLE: CHECK FOR PARITY
type bit = 1 | 0;
const Parity = (x: number): bit => {
  let result: bit = 0;
  while (x !== 0) {
    // result ^= (x & 1);
    // x >>>= 1;
    result ^= 1;
    x &= x - 1;
  }
  return result as bit;
};
