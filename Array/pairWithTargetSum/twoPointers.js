// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v5
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const readline = require("readline");

const arr = [1, 2, 3, 4, 5];
let target = 8;

const isPair = (arr, target) => {
  // initialize two pointers, lower and upper
  let lower = 0,
    upper = arr.length - 1;
  // loop till upper is greater than lower
  while (lower < upper) {
    // calculate the sum of elements present in lower and upper
    const sum = arr[lower] + arr[upper];
    // if the sum is the target, return the sum
    if (sum === target) return sum;
    // if sum is greater than target, decrement upper
    if (sum > target) upper--;
    // if sum is lesser than target, increment lower
    if (sum < target) lower++;
  }
  // return -1 if not found
  return -1;
};

const res = isPair(arr, target);
console.log(res);
