// https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
// v4
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

const arr = [11, 15, 5, 8, 9, 10],
  x = 24;

const res = pair(arr, x);
console.log(res);

/**
 * pivot
 * @param {Array<number>} arr input array
 * @returns {number} pivot position
 */
function pivot(arr) {
  // binary search
  // initialize lower bound and upper bound
  let lower = 0,
    upper = arr.length - 1;

  // initialize the first element to a constant
  const first = arr[0];

  // loop till lower bound is less or equal to upper bound
  while (lower <= upper) {
    // calculate mid
    const mid = lower + Math.floor((upper - lower) / 2);

    // if mid is greater than its next element, return mid
    if (arr[mid] > arr[mid + 1]) return mid;

    // if mid is less than first element, make upper mid-1
    if (arr[mid] < first) upper = mid - 1;
    // if mid is greater than the first element, make lower mid+1
    else lower = mid + 1;
  }
  return 0;
}

/**
 * pair
 * @param {Array<number>} arr input array
 * @param {String} target target sum
 * @returns {String} result
 */
function pair(arr, target) {
  // get the pivot element
  const int = pivot(arr);
  
  // initialize two pointer, one to the pivot and other pivot+1
  let upper = int,
    lower = int + 1;

  // loop till lower!=upper
  while (lower != upper) {
    // calculate sum of lower and upper elements
    const sum = arr[lower] + arr[upper];

    // if the sum is target, return the elements
    if (sum === target) return `${arr[lower]}+${arr[upper]}=${target}`;

    // if the sum is greater than the target, decrement the upper
    if (sum > target) upper = (upper - 1 + arr.length) % arr.length;
    // if sum is less than target, increment the lower
    else lower = (lower + 1 + arr.length) % arr.length;
  }
  return false;
}
