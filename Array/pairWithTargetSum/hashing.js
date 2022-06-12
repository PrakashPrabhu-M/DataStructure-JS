// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v4
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const arr = [0, -1, 2, -2, 1],
  target = -1;

/**
 * isPair
 * @param {Array<number>} arr input array
 * @param {number} target target sum
 * @returns {boolean} true is exists, false is not
 */
function isPair(arr, target) {
  // x+y=target
  // x=target-y
  const hash = new Set();
  for (let y of arr) {
    // So if target - y exists in the arr, return true
    // y will be looping variable
    if (hash.has(target - y)) {
      console.log(`${y}+${target-y}=${target}`)
      return true;
    }
    hash.add(y);
  }
  // after loop if not returned, then return false
  return false;
}

const OnComplexity = (arr, target) => {
  const set = new Set();
  for (let i of arr) {
    if (set.has(target - i)) return `${target - i}+${i}=${target}`;
    set.add(i);
  }
  return false;
};

const res = isPair(arr, target);
console.log(res);
