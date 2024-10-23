export {};
const karatsuba = (x: bigint, y: bigint): bigint => {
  if (x < 10n && y < 10n) return x * y;

  const n = Math.max(x.toString().length, y.toString().length);
  let halfN = Math.floor(n / 2);

  const a = BigInt(x.toString().slice(0, -halfN));
  const b = BigInt(x.toString().slice(-halfN));
  const c = BigInt(y.toString().slice(0, -halfN));
  const d = BigInt(y.toString().slice(-halfN));

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const abcd = karatsuba(a + b, c + d);
  const z = abcd - bd - ac;
  //   ac = BigInt(ac.toString() + Array(2*(halfN)).fill(0).join(""));
  //   z = BigInt(z.toString() + Array(halfN).fill(0).join(""));
  return ac * 10n ** (2n * BigInt(halfN)) + z * 10n ** BigInt(halfN) + bd;
};
console.time("Algorithm Time");
console.log(karatsuba(1223n, 323232n));
console.timeEnd("Algorithm Time");

console.log(Array(4).fill(0).join(""));
