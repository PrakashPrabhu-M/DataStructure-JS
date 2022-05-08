// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
// v2
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
  // 12, 3, 4, 1, 6, 9
  // sort the array => 1 3 4 6 9 12
  arr.sort((a, b) => a - b);

  // x+y+z=target
  // x+y=target-z
  // z is looping variable
  for (let z = 0; z < arr.length - 2; z++) {
    // y and x are upper and lower boundaries
    let lower = z + 1,
      upper = arr.length - 1;
    const tar=target-arr[z];
    // loop till upper is greater than lower
    while (upper > lower) {
      // if x+y is equal to target - z, return x, y and z
      if(arr[upper]+arr[lower]===tar) return `${arr[z]} + ${arr[lower]} + ${arr[upper]} = ${target}`;

      // if x+y>target-z then, decrement upper
      if(arr[lower]+arr[upper]>tar) upper--;

      // else if x+y<target-z then, increment lower
      else if(arr[lower]+arr[upper]<tar) lower++;
    }
  }
  // return false if not found
  return 'not found';
}
