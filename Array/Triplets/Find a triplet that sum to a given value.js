// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
// v4
// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
// Output: 12, 3, 9
// Explanation: There is a triplet (12, 3 and 9) present
// in the array whose sum is 24.
// Input: array = {1, 2, 3, 4, 5}, sum = 9
// Output: 5, 3, 1
// Explanation: There is a triplet (5, 3 and 1) present
// in the array whose sum is 9.

const arr = [12, 3, 4, 1, 6, 9, 2],
  target = 15;

const res = isPresent(arr, target);
console.log(res);

function isPresent(arr, target) {
  // x+y+z=target
  // x+y=target-z
  // we need to find a pair consisting of x and y that sums up to target-z
  // sort the array in asscending order
  arr.sort((a, b) => a - b);
  console.log(arr);
  // loop throught the array with z as loopting variable
  for (let i = 0; i < arr.length; i++) {
    const z = arr[i];
    // calculate modifiedTarget from target-z
    const tempTarget = target - z;
    // initialize lower and upper bound as 0 and arr.length-1
    let lower = i+1,
      upper = arr.length - 1;
    // loop till lower is less than upper
    while (lower < upper) {
      // calculate the sum of lower element and upper element
      const sum = arr[lower] + arr[upper];
      // if the sum is the target, return true
      if (sum === tempTarget)
        return `${arr[lower]}+${arr[upper]}+${z}=${target}`;
      // if the sum is less than the target, increment the lower bound
      if (sum < tempTarget) lower++;
      // else if the sum is greater than the target, decrement the upper bound
      else if (sum > tempTarget) upper--;
    }
  }
  // return false after completing two loops
  return false;
}
