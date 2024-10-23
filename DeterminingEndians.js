const BIG_ENDIAN = Symbol("BIG_ENDIAN");
const LITTLE_ENDIAN = Symbol("LITTLE_ENDIAN");
function getPlatformEndianness() {
  const arr32 = Uint32Array.of(0x12345678);
  const arr8 = new Uint8Array(arr32.buffer);
  switch (arr8[0] * 0x1000000 + arr8[1] * 0x10000 + arr8[2] * 0x100 + arr8[3]) {
    case 0x12345678:
      return BIG_ENDIAN;
    case 0x78563412:
      return LITTLE_ENDIAN;
    default:
      throw new Error("Unknown endianness");
  }
}
console.log(getPlatformEndianness());

// const assert = require("assert");
// // Create an ArrayBuffer of 16 bytes
// const buffer = new ArrayBuffer(16);

// // Create a Uint8Array (view) with the same ArrayBuffer
// const uint8Array = new Uint8Array(buffer);

// // Create a Float32Array (another view) with the same ArrayBuffer
// const float32Array = new Float32Array(buffer);

// // Fill the Uint8Array with some data
// for (let i = 0; i < uint8Array.length; i++) {
//   uint8Array[i] = i + 1; // Fill with values 1 to 16
// }

// // Access the underlying ArrayBuffer
// console.log(uint8Array.buffer); // Output: ArrayBuffer(16)

// // Log the contents of both views
// console.log(uint8Array); // Output: Uint8Array(16) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
// const arr = new Array(4);
// float32Array.map((bit) => arr.push(bit.toString(2)));
// console.log(float32Array.buffer); // Output: Float32Array(4) [ 1, 2, 3, 4 ]

// // Note: The Float32Array interprets the same bytes in the buffer differently
// const obj = {};
// // console.log(obj.prototype);
// let e;
// try {
//   const x = 3;
//   assert.equal(x, 8, "x must be equal to 8");
// } catch (err) {
//   assert.equal(
//     String(err),
//     "AssertionError [ERR_ASSERTION]: x must be equal to 8"
//   );
// }

// // OPTION another one
// function add(x, y) {
//   return [x, y, this];
// }

// // console.log(add(3, 4));

// const jane = {
//   first: "Jane",
//   says(text) {
//     return `${this.first}, ${this} says “${text}”`;
//   },
// };
// const func = jane.says;
// console.log(so.and?.what);
