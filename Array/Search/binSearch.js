// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
// v1
// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
//          key = 3
// Output : Found at index 8

const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
const res = search(arr, 1);

function search(arr, k) {
  // Binary search to find the pivot point
  // initialize upper as array length -1 and lower as 0, and lowest as the first element of the array
  // loop till upper is greater than lower
  // calculate mid
  // check if the mid element is greater than mid+1 element, if yes, make mid as pivot and break the loop
  // else if mid element is greater than lowest, make lower as mid+1
  // else if mid element is lesser than lowest, make upper mid-1

  // pivot found
  // make lower as 0 and upper as pivot
  // 
}
