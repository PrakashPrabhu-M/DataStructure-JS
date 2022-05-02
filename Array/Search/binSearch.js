// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log('Started...\n');
const res=search(arr, 1);
console.log(`Element is located at ${res}\n`);
console.log('Completed');

function search(arr, k) {
  // initialize lower and upper bound as 0 and the length
  let lower = 0,
    upper = arr.length - 1;

  // to find the pivot point (the first element that is less than the previous element), store the 1st element as lowest
  const lowest = arr[0];
  let pivot;

  // loop through the array till upper is >= lower
  while (upper >= lower) {
    // calculate the mid from upper and lower
    const mid = lower + Math.floor((upper - lower) / 2);

    // if mid is lesser than it's next element mid+1, make pivot as mid and break the loop
    if (arr[mid] > arr[mid + 1]) {
      pivot = mid;
      break;
    }
    // else if mid is lesser than lowest, make upper as mid-1
    else if (arr[mid] < lowest) upper = mid - 1;
    // else if mid is greater than upper, make lower as mid+1
    else lower = mid + 1;
  }
  console.log(`Pivot of ${arr} is ${pivot}\n`);
  // after finding the pivot point, start binary search on both sides of the pivot elements to find the element

  //   starting binary search on first half
  // make lower as 0 and upper as pivot
  lower = 0;
  upper = pivot;

  // loop till upper is greater than lower
  while (upper >= lower) {
    // calculate mid
    const mid = lower + Math.floor((upper - lower) / 2);

    // if mid is k, return mid
    if (arr[mid] === k) return mid;
    // else if mid is greater than k, make upper mid-1
    else if (arr[mid] > k) upper = mid - 1;
    // else if mid is lesser than k, make lower mid+1
    else if (arr[mid] < k) lower = mid + 1;
  }
  console.log('Search completed in first half\n');
  //   binary search on second half
  // make lower as pivot and upper as length-1 of the array
  lower = pivot;
  upper = arr.length - 1;

  // loop till upper is greater than or equal to lower
  while (upper >= lower) {
    // calculate mid
    const mid=lower+Math.floor((upper-lower)/2);

    // if mid is equal to k, return mid
    if(arr[mid]===k) return mid;

    // else if it is greeater, make upper mid-1
    else if(arr[mid]>k) upper=mid-1;

    // else if it lesser, make lower mid+1
    else if(arr[mid]<k) lower=mid+1;
  }
}
