// https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
// v3
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

const arr = [11, 15, 5, 8, 9, 10],
  x = 16;

const res = pair(arr, x);
console.log(res);

function pair(arr, target) {
  // initialize array length as len
  const len = arr.length;

  // find pivot point
  const pivot = (nums) => {
    // initialize two pointers, upper to end of the array and lower to the starting of the array
    let upper = len - 1,
      lower = 0;

    // store the first element to a variable first
    const first = nums[0];

    // loop till the lower is lower than or equal to upper
    while (lower <= upper) {
      // calculate mid index from lower and upper
      const mid = lower + Math.floor((upper - lower) / 2);

      // check if the mid is the pivot i.e., [mid]>[mid+1] if yes return pivot
      if (nums[mid] > nums[mid+1]) return mid;

      // compare the mid element with first element, if first element is greater then, make upper as mid-1
      if (nums[mid] < first) upper = mid - 1;
      // if the first element is less than the mid, make lower as mid+1
      else lower = mid + 1;
    }
    // after the loop, return 0 if not found
    return 0;
  };
  // get pivot element
  const p_elem = pivot(arr);

  // initialize two pointers, lower as pivot + 1 and upper as pivot
  
  if (p_elem === 0) {
    (lower = 0), (upper = len - 1);
  } else {
    (lower = p_elem + 1), (upper = p_elem);
  }

  // loop till lower and upper are not equal
  while (lower !== upper) {
    // calculate the sum
    const sum = arr[lower] + arr[upper];

    if(sum===target) return true;

    // if the sum is lower than target, increment the lower by 1 i.e., (lower+1)%len
    if (sum < target) lower = (lower + 1) % len;

    // if the sum is greater than target, decrement the upper by 1 i.e.,(upper-1+len)%len
    if (sum > target) upper = (upper - 1 + len) % len;
  }
  // return false after the loop is over
  return false;
}
