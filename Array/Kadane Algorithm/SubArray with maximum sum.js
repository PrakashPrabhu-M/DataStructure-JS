// https://www.crio.do/learn/v2/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_CONTIGIOUSSEQUENCE/
// Thanks to https://www.youtube.com/watch?v=w_KEocd__20
// v2
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

// initialize a max variable with the first element of the array
let max = -Infinity;
// loop throught the array
for (let i of arr) {
  // accumulate the values to sum
  sum+=i;

  // if the value of sum is greater than max, update max to sum
  if(sum>max) max=sum;

  // if sum is less than 0, update sum as 0
  if(sum<0) sum=0;
}
// return the value of max
console.log(max);