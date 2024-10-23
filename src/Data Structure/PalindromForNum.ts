// TITLE: IS A NUMBER PALINDROM?
const isPalindrome = (n: number): boolean => {
  if (n === 0) return true;
  if (n < 0 || n % 10 === 0) return false;
  let lastHalf = 0;
  while (lastHalf < n) {
    lastHalf = lastHalf * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return lastHalf === n || Math.floor(lastHalf / 10) === n;
};

console.log(
  isPalindrome(100),
  isPalindrome(121),
  isPalindrome(0),
  isPalindrome(-122),
  isPalindrome(123421)
);
// false true true false false
