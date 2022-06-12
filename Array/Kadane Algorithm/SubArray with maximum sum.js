// https://www.crio.do/learn/v2/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_CONTIGIOUSSEQUENCE/
// Thanks to https://www.youtube.com/watch?v=w_KEocd__20
// v4
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

const res = maxSum(arr, arr.length);
console.log(res);

/**
 * maxSum
 * @param {Array<number>} arr input array
 * @param {number} len size of the array
 * @returns {number} maximum subarray sum
 */
function maxSum(arr, len) {
  // initialize two numbers with 0
  let temp = 0,
    res = 0;
  // iterate through the array
  for (let i of arr) {
    // Accumulate the array with temp
    temp += i;
    // if temp is greater than res, make res as temp
    if (temp > res) res = temp;
    // if temp is less than 0, make temp as 0
    if (temp < 0) temp = 0;
  }
  // return the sum
  return res;
}
