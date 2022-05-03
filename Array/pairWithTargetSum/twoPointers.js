// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/

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

  // initialize two pointers lower and upper
  let lower = 0,
    upper = arr.length - 1;

  // loop till upper is greater than lower
  while (upper > lower) {
    // calculate sum
    const sum = arr[lower] + arr[upper];

    // if sum is equal to target return true
    if (sum === target) return [arr[lower],arr[upper]];

    // if sum is greater than target, decrement upper
    if (sum > target) upper--;
    // else increment lower
    else lower++;
  }
  // return false
  return false;
}

const res = isPair(arr, target);
console.log(res);
