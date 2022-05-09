// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
// v3
// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
// Output: 12, 3, 9
// Explanation: There is a triplet (12, 3 and 9) present
// in the array whose sum is 24.
// Input: array = {1, 2, 3, 4, 5}, sum = 9
// Output: 5, 3, 1
// Explanation: There is a triplet (5, 3 and 1) present
// in the array whose sum is 9.

const arr = [12, 3, 4, 1, 6, 9],
  target = 24;

const res = isPresent(arr, target);
console.log(res);

function isPresent(arr, target) {
  // x+y+z=target
  // x+y=target-z
  // so to find a pair of elements with sum target-z
  // sort the array in asscending order
  arr.sort((a, b) => a - b);

  // loop through the array and z is that looping variable
  for (let z = 0; z < arr.length; z++) {
    // initialize lower bound to z+1 and upper bound to array length-1
    let lower = z + 1,
      upper = arr.length - 1;

    // calculate the sum of the two boundaries
    while (lower < upper) {
      const sum = arr[lower] + arr[upper];

      // if it is higher than the target-z, then decrement the upper bound by 1
      if (sum > target - z) {
        upper--;
        continue;
      }

      // if it is lower then the target-z, then increment the lower bound by 1
      if (sum < target - z) {
        lower++;
        continue;
      }
      // return once found
      return `${arr[lower]} + ${arr[upper]} + ${z} = ${target}`;
    }
  }
  // if not found after the loop return false
  return false;
}
