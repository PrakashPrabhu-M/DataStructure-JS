// https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
// v5
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

const arr = [11, 15, 18, 28, 46, 5, 8, 9, 10],
  x = 51;

const res = pair(arr, x);
console.log(res);

/**
 * pivot
 * @param {Array<number>} arr input array
 * @returns {number} pivot position
 */
function pivot(arr) {
  // binary search
  // initialize two pointers, lower, upper and first element
  const first = arr[0];
  let lower = 0,
    upper = arr.length - 1;
  // loop till lower is lesser or equal to upper
  while (lower <= upper) {
    // calculate mid from upper and lower
    const mid = lower + Math.floor((upper - lower) / 2);
    // check if the mid element is less than it's previous element
    if (arr[mid] < arr[mid - 1]) return mid;
    // if mid element is greater than first, make lower as mid+1
    if (arr[mid] > first) lower = mid + 1;
    // else, make upper as mid-1
    else upper = mid - 1;
  }
}

/**
 * pair
 * @param {Array<number>} arr input array
 * @param {String} target target sum
 * @returns {String} result
 */
function pair(arr, target) {
  const PIVOT = pivot(arr);
  // initialize two pointers, lower as pivot and upper as pivot-1
  let lower = PIVOT,
    upper = PIVOT - 1;
  // loop till lower is not equal to upper
  while (lower !== upper) {
    // check the sum of lower element and upper element, whether they are equal to target, return the result if yes
    const sum = arr[lower] + arr[upper];
    if (sum === target) return `${arr[lower]} + ${arr[upper]} = ${target}`;
    // if the sum is lower than target, increment the lower
    if (sum < target) lower = (lower + 1) % arr.length;
    // else if the sum is greater than target, decrement the upper
    else if (sum > target) upper = (upper - 1 + arr.length) % arr.length;
  }
  return -1;
}
