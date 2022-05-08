// https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
// v2
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

const arr = [11, 15, 5, 8, 9, 10],
  x = 16;

const res = pair(arr, x);
console.log(res);

function pair(arr, target) {
  // Find pivot point
  function pivotPoint(arr) {
    // initialize lower and upper boundaries
    let lower = 0,
      upper = arr.length - 1;
    // initialize first as first element of the array
    const first = arr[0];

    // loop till upper>=lower
    while (upper >= lower) {
      // calculate mid
      const mid = lower + Math.floor((upper - lower) / 2);

      // if mid > mid+1, make pivot as mid
      if (arr[mid] > arr[mid + 1]) return mid;

      // if mid<first, make upper mid-1
      if (arr[mid] < first) upper = mid - 1;
      // else if mid>first, make lower mid+1
      else lower = mid + 1;
    }
  }

  const pivot = pivotPoint(arr);
  console.log(pivot);

  // make lower as pivot+1 and upper as pivot % arr.length
  let lower = pivot + 1;
  let upper = pivot;

  // loop till they're not equal
  while (upper !== lower) {
    // calculate sum of the two elements in the pointers
    const sum=arr[upper]+arr[lower];

    // if the sum is the target, return true
    if(sum===target) return `${arr[upper]} + ${arr[lower]} = ${target}`;

    // if the sum is greater than the target, then drecement the upper
    if(sum>target){
      upper=(upper-1+arr.length)%arr.length;
    }
    // else if sum is lesser than target, increment the target
    else if(sum<target){
      lower=(lower+1)%arr.length;
    }
  }
}
