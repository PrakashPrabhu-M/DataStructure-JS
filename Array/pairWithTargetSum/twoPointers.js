// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v3
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const readline = require('readline');

const arr = [1, 2, 3, 4, 5];
let target = 5;

function isPair(arr, target) {
  // sort the array
  arr.sort((a, b) => a - b);

  // initialzie two pointers one from 0 and other for last
  let start = 0,
    end = arr.length - 1;

  // loop till last is greater than first pointer
  while (end > start) {
    // calculate the sum of first and last
    const sum = arr[start] + arr[end];

    if(sum===target) return `${arr[start]} + ${arr[end]} = ${target}`;

    // if the sum is greater than target, reduce the last pointer
    if (sum > target) end--;

    // if the sum is lesser than target, then increase the first pointer
    else if (sum < target) start++;
  }
  // return false if not found
  return false
}
const res = isPair(arr, target);
console.log(res);
