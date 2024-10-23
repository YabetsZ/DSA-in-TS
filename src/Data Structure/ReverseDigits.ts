// METHOD: NUMBER MANIPULATION
// TITLE: REVERSING THE DIGITS
export {};
const reverse = (n: number): number => {
  let result = 0;
  while (n != 0) {
    result = result * 10 + (n % 10);
    if (n < 0) {
      n = Math.ceil(n / 10);
      continue;
    }
    n = Math.floor(n / 10);
  }
  return result;
};

console.log(reverse(-13223));
