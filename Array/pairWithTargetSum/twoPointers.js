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

const readline = require("readline");

const arr = [1, 2, 3, 4, 5];
let target = 5;

const isPair = (arr, target) => {
  // initialize two pointers, one to leftmost and other to the right most
  let upper = arr.length - 1,
    lower = 0;

  // loop till upper is greater than lower
  while (upper > lower) {
    // calculate sum
    const sum=arr[lower]+arr[upper];

    // if the sum is target, return the elements
    if(sum===target) return `${arr[lower]}+${arr[upper]}=${target}`;

    // if sum is greater than the target, decrement upper
    if(sum>target) upper--;

    // else increment lower
    else lower++;
  }
  // return false if not found
  return false;
};

const res = isPair(arr, target);
console.log(res);
