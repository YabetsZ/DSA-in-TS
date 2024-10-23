// METHOD: BIT MANIPULATION
// TITLE: REVERSING THE BIT REPRESENTATION OF A NUMBER USING LOOKUP TABLE
const reverseTable = (): Uint16Array => {
  let table = new Uint16Array(2 ** 16);
  for (let i = 0; i < 65536; i++) {
    let result = 0;
    for (let j = 0; j < 16; j--) {
      if ((i >> j) & 1) {
        result |= 1 << (15 - j);
      }
    }
    Number(i);
    table[i] = result;
  }
  return table;
};

console.log(reverseTable());
