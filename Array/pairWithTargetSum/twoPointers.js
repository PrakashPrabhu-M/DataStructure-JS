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

const readline = require("readline");

const arr = [1, 2, 3, 4, 5];
let target = 5;

const isPair = (arr, target) => {
  arr.sort((a,b)=>a-b);
  // initialize two pointers, one from start and other to end
  let lower = 0,
    upper = arr.length - 1;

  // loop till upper is greater than lower
  while (upper > lower) {
    // add the values for two pointer and name it as sum
    const sum=arr[upper]+arr[lower];

    // if the sum is the target, return true
    if(sum===target) return [true,arr[upper],'+',arr[lower],'=',target];

    // if the sum is less than target, increment the lower bound by 1
    if(sum<target) lower++;

    // else if the sum is greater than the target, decrement the upper bound by 1
    else upper--;
  }
  // return false after the loop
  return false;
};

const res=isPair(arr,target);
console.log(res);