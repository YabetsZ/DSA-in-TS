/* METHOD : Karatsuba
*   Input: two n-digit positive integers x and y.
*   Output: the product x · y.
*   Assumption: n is a power of 2.

*   if n = 1 then  // base case
*       compute x · y in one step and return the result
*   else // recursive case
*       a, b := first and second halves of x
*       c, d := first and second halves of y
*       compute p := a + b and q := c + d using grade-school addition
*       recursively compute ac := a · c, bd := b · d, and pq := p · q
*       compute adbc := pq - ac - bd using grade-school addition
*       compute 10n · ac + 10n/2 · adbc + bd using grade-school addition and return the result 
*/
export {};
function gradeSchoolAdd(x: number, y: number): number {
  return x + y;
}

const karatsuba = (x: number, y: number): number => {
  if (x < 10 || y < 10) {
    return x * y;
  }

  // n and half of n initialization
  const n = Math.max(x.toString().length, y.toString().length);
  const halfN = Math.floor(n / 2);

  // dividing x and y into almost equal number of digits, assuming both are made equal by adding leading zeros
  const a = Math.floor(x / 10 ** halfN);
  const b = x % 10 ** halfN;
  const c = Math.floor(y / 10 ** halfN);
  const d = y % 10 ** halfN;

  // working on the multiplication part
  const ac = karatsuba(a, c); // a * c
  const bd = karatsuba(b, d); // b * d
  const z = karatsuba(a + b, b + d); // (a + b)(c + d)
  const adbc = z - bd - ac; // (a * d) + (b * c)

  // Final result
  return Math.pow(10, n) * ac + Math.pow(10, halfN) * adbc + bd;
};

// Example usage:
const x: number = 40;
const y: number = 500;
const result: number = karatsuba(x, y);
console.log(`The product of ${x} and ${y} is ${result}`);
