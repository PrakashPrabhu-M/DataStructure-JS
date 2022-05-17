// https://www.crio.do/learn/v2/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_CONTIGIOUSSEQUENCE/
// Thanks to https://www.youtube.com/watch?v=w_KEocd__20
// v3
// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Sample Input 1
// 8
// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

// Explanation 1
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.

arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// initialize a sum variable with 0
let sum = 0;

const res=maxSum(arr,arr.length);
console.log(res);

/**
 * maxSum
 * @param {Array<number>} arr input array
 * @param {number} len size of the array
 * @returns {number} maximum subarray sum
 */
function maxSum(arr, len) {
  // initialize a tempSum 0 and a sum variable to -infinity
  let tempSum = 0,
    sum = -Infinity;

  // loop through the array
  for (let i of arr) {
    // accumulate tempSum
    tempSum+=i
    // if tempSum is greater than sum, make sum as tempSum
    if(tempSum>sum) sum=tempSum;

    // if tempSum is less than 0, make tempSum as 0
    else if(tempSum<0) tempSum=0;
  }
  // return sum
  return sum;
}
