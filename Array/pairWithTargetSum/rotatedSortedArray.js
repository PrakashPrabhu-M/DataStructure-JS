// https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/
// v1
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

const arr = [11, 15, 5, 8, 9, 10],
  x = 16;

const res = pair(arr, x);
console.log(res);

function pair(arr, target) {
  // use binary search to find the pivot point
  let lower = 0,
    upper = arr.length - 1,
    pivot;
  const lowest = arr[0];
  while (upper >= lower) {
    const mid = lower + Math.floor((upper - lower)/2);
    if (arr[mid] > arr[mid + 1]) {
      pivot = mid;
      break;
    }
    if (arr[mid] < lowest) upper--;
    else if (arr[mid] > lowest) lower++;
  }
  // after finding the pivot
  // make start pointer as pivot +1 % arr.length
  lower = (pivot + 1) % arr.length;

  // make end pointer as pivot % arr.length
  upper = pivot % arr.length;

  // use the two pointer approach to find the pair
  while (lower != upper) {
    const sum = arr[lower] + arr[upper];
    console.log(upper,lower);
    if (sum === target) return `${arr[lower]} + ${arr[upper]} = ${target}`;
    else if (sum > target) {
      upper = (arr.length + upper - 1) % arr.length;
    } else if (sum < target) {
      lower = (lower + 1) % arr.length;
    }
  }
  return false;
}
