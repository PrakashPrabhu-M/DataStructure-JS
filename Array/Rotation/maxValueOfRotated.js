// Find maximum value of Sum( i*arr[i]) with only rotations(clockwise) on given array allowed
// https://www.geeksforgeeks.org/find-maximum-value-of-sum-iarri-with-only-rotations-on-given-array-allowed/
// v2
// Input: arr[] = {1, 20, 2, 10}
// Output: 72
// We can get 72 by rotating array twice.
// {2, 10, 1, 20}
// 20*3 + 1*2 + 10*1 + 2*0 = 72

/**
 * maxSum
 * @param {Array<number>} arr array of integers
 * @param {number} l length of the array
 * @returns {number} maximum sum among all possible rotations
 */
function maxSum(arr, l) {
  // Suppose the array is 1 2 3 4 5
  // no rotate, r0 = a[0]*0 a[1]*1 a[2]*2 a[3]*3 a[4]*4
  // 1 rotation, r1 = a[4]*0 + a[0]*1 + a[1]*2 + a[2]*3 + a[3]*4
  // r1 = a[n-1]*0 + a[n-n]*1 + a[n-4] *2 + a[n-3]*3 + a[n-2]*4
  // r0 = a[n-n]*0 + a[n-4]*1 + a[n-3]*2 + a[n-2]*3 + a[n-1]*4
  // r1-r0 = a[0] + a[n-4]*2 + a[n-3]*3 + a[n-2]*4 -(a[n-4] + a[n-3]*2 + a[n-2]*3 + a[n-1]*4)
  // r1-r0 = a[0] + a[n-4] + a[n-3] + a[n-2] - a[n-1]*4
  // r1-r0 = a[0] + a[1] + a[2] + a[3] + a[4] -a[4]*n
  // r1-r0 = sum - a[n-1]*n
  // r1 = sum - a[n-1]*n + r0

  // 4 5 1 2 3 -> elm
  // 3 4 0 1 2 -> ind
  // r2 = a[n-2]*0 + a[n-1]*1 + a[0]*2 + a[1]*3 +a[2]*4

  // 3 4 5 1 2 -> elm
  // 2 3 4 0 1 -> ind
  // r3 = a[n-3]*0 + a[n-2]*1 + a[n-1]*2 + a[0]*3 + a[1]*4

  // r3-r2 = a[n-2]*1 + a[n-1]*2 + a[0]*3 + a[1]*4 -(a[n-1]*1 + a[0]*2 + a[1]*3 +a[2]*4)
  // r3-r2 = a[n-2] + a[n-1] + a[0] + a[1] - a[2]*4
  // r3-r2 = a[3] + a[4] + a[0] + a[1] + a[2] - a[2]*5
  // r3-r2 = sum - a[n-3]*n

  // r3 = sum - a[n-3]*n + r2
  // r1 = sum - a[n-1]*n + r0
  // ri = sum - a[n-i]*n + ri-1

  /**
   * sum
   * @type {number} sum of the array
   */
  const sum = arr.reduce((a, b) => a + b);
  // initialize a list, r for r0, r1, ...
  const r = [];
  // calculate r0 mannually
  let r0 = 0;
  for (let i = 0; i < l; i++) {
    r0 += arr[i] * i;
  }

  // append r0 to the list r
  r.push(r0);

  // iterate from 1 to l times
  for (let i = 1; i < l; i++) {
    // in each iteration, calculate ri from the formula ri = sum - a[n-i]*n + ri-1
    const temp = sum - arr[l - i] * l + r[i - 1];
    // append it to the list r
    r.push(temp);
  }
  // return the max element from r
  return Math.max(...r);
}

const arr = [1, 20, 2, 10];
const res = maxSum(arr, arr.length);
console.log(res);
