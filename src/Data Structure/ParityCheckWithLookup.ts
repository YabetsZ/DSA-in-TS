// METHOD: BIT MANIPULATION
// TITLE: parity check 64 bit numbers using lookup table
export {};
const parityTable = (): Uint8Array => {
  let table = new Uint8Array(65536);
  for (let i = 1; i < 65535; i++) {
    table[i] = (i & 1) ^ table[i >>> 1];
  }
  console.log(table[23323]);
  return table;
};

const parity = (x: number): number => {
  const W0RD_SIZE = 16;
  const BIT_MASK = 0xffff;
  const table = parityTable();
  console.log(
    table[(x >>> (3 * W0RD_SIZE)) & BIT_MASK],
    table[(x >>> (2 * W0RD_SIZE)) & BIT_MASK],
    table[(x >>> W0RD_SIZE) & BIT_MASK]
  );
  return (
    table[(x >>> (3 * W0RD_SIZE)) & BIT_MASK] ^
    table[(x >>> (2 * W0RD_SIZE)) & BIT_MASK] ^
    table[(x >>> W0RD_SIZE) & BIT_MASK] ^
    table[x & BIT_MASK]
  );
};

console.log(parity(23323));
console.log((23323).toString(2), (0xffff).toString(2));
