// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
// v2
// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

/**
 * arr
 * @type {Array<number>}
 */
const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];

/**
 * key
 * @type {number} the number to be searched in the array
 */
const key = 1;

/**
 * findPivot
 * @param {Array<number>} arr the array
 * @param {number} len length of the array
 * @returns {number} index of the pivot element
 */

const findPivot = (arr, len) => {
  // initialize lower bound and upper bound to 0 and len-1
  let lower = 0,
    upper = len - 1;

  // store the first element in first
  const first = arr[0];

  // loop till upper is greater than or equal to lower
  while (upper >= lower) {
    // calculate mid
    const mid = lower + Math.floor((upper - lower) / 2);

    // if the mid element is > mid+1 element, return mid
    if (arr[mid] > arr[mid + 1]) return mid;

    // if the first element is greater than mid, make upper mid-1
    if (first > arr[mid]) upper = mid - 1;
    // else if the first element is less than mid, make lower mid+1
    else lower = mid + 1;
  }
  // return 0 after the loop
  return 0;
};

/**
 * search
 * @param {Array<number>} arr searching space
 * @param {number} k element to be searched
 * @returns {number} index of k or else -1
 */
const search = (arr, k) => {
  /**
   * pivot
   * @type {number} index of pivot element
   */
  const pivot = findPivot(arr, arr.length);

  // initialize two pointers, lower starting from 0 and upper at pivot
  let lower = 0,
    upper = pivot;

  // loop till lower is less than or equal to upper
  while (lower <= upper) {
    // calculate mid
    const mid = lower + Math.floor((upper - lower) / 2);

    // if the mid element is k, return mid
    if (arr[mid] === k) return mid;

    // if mid element is greater than k, make upper mid-1
    if (arr[mid] > k) upper = mid - 1;
    // if mid element is less than k, make lower mid+1
    else if (arr[mid] < k) lower = mid + 1;
  }

  // initialize lower as pivot+1 and upper as arr.length-1
  (lower = pivot + 1), (upper = arr.length - 1);

  // loop till upper is greater than or equal to lower
  while (lower <= upper) {
    // calculate mid
    const mid = lower + Math.floor((upper - lower) / 2);

    // if mid is k, return mid
    if (arr[mid] === k) return mid;

    // if mid element is greater than k, make upper mid-1
    if (arr[mid] > k) upper = mid - 1;
    // if mid is less than k, make lower mid+1
    else if (arr[mid] < k) lower = mid + 1;
  }

  // return false if not found
  return false;
};
/**
 * result
 * @type {number} result of the executed function
 */
// const result = search(arr, key);
// console.log(result);
for(let i=0;i<=10;i++)
console.log(i, search(arr, i));