// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
// v1
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explaination:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const arr = [0, -1, 2, -2, 1],
  target = -2;

function isPair(arr, target) {
  // sort the array in asscending order
  arr.sort((a, b) => a - b);

  // initialize two pointers begin and end
  let begin = 0,
    end = arr.length - 1;

  // loop till end is greater than begin
  while (end > begin) {
    // calculate the sum of end and begin
    const sum = arr[end] + arr[begin];

    // if the sum is equal to target return true
    if (sum === target) return `${arr[end]} + ${arr[begin]} = ${target}`;

    // if sum is greater, decrement end by 1
    if (sum > target) end--;
    // if sum is lesser, increment begin by 1
    else begin++;
    // after looping return false
  }
  return false;
}
const res = isPair(arr, target);
console.log(res);
