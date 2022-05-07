// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/

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
  // sort the array
  arr.sort((a, b) => a - b);

  // loop through the elements
  for (let i = 0; i < arr.length - 2; i++) {
    // initialize two pointers, begin as loop_ind+1 and end as arr.length-1 and temp_target as target-loopVariable
    let begin = i + 1,
      end = arr.length - 1,
      temp_target = target - arr[i];

    // loop till end_ind > begin_ind
    while (end > begin) {
      // begin+end+loopVariable=target
      // begin+end=target-loopVariable
      const sum=arr[begin]+arr[end];
      // if begin + end equals temp_target return true
      if(sum===temp_target) return true;

      // if begin+end is greater than temp_target, reduce end by 1
      if(sum>temp_target) end--;

      // if begin+end is less than temp target, increase begin by 1
      else if(sum<temp_target) begin++;
    }
  }

  return false;
}
